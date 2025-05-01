"use client";

import { useState, FormEvent, useRef, ChangeEvent } from "react";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import { useDropzone } from 'react-dropzone';

// Import Shadcn Select components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

// Define Zod schema for form validation
const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  contactNumber: z
    .string()
    .min(8, "Contact number is too short")
    .max(20, "Contact number is too long"),
  qualification: z.string().min(1, "Qualification is required"),
  applyFor: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience"),
});

// Define a type for form data based on the schema
type FormData = z.infer<typeof formSchema> & {
  resume: File | null;
};

// Define a type for form errors
type FormErrors = Partial<Record<keyof FormData, string>>;

interface Vacancy {
  id: number;
  title: string;
  experience: string;
}

export default function CareerForm({ currentVacancy }: { currentVacancy: Vacancy[] }) {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    qualification: "",
    applyFor: "",
    experience: "",
    resume: null,
  });

  // Form errors state
  const [errors, setErrors] = useState<FormErrors>({});

  // State for country code
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  // State for file upload
  const [fileDataUrl, setFileDataUrl] = useState<string | null>(null);
  const [inputKey, setInputKey] = useState<number>(Date.now());
  const [formLoader, setFormLoader] = useState<boolean>(false);

  // Replace the direct drag and drop implementation with react-dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf']
    },
    onDrop: acceptedFiles => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        // Handle the file upload
        handleUploadedFile(file);
      }
    },
    onDropRejected: (rejectedFiles) => {
      console.log("Rejected files:", rejectedFiles);
      setErrors({
        ...errors,
        resume: "Only PNG, JPG and PDF files are supported"
      });
    },
    multiple: false
  });

  // Form ref
  const form = useRef<HTMLFormElement>(null);

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Handle phone input change
  const handlePhoneChange = (
    value: string,
    country: { dialCode: string; name: string; countryCode: string }
  ) => {
    setFormData({
      ...formData,
      contactNumber: value,
    });

    setSelectedCountryCode(country?.dialCode || "");

    // Clear error when user types
    if (errors.contactNumber) {
      setErrors({
        ...errors,
        contactNumber: "",
      });
    }
  };

  // Function to return formatted phone number
  const getFormattedPhoneNumber = () => {
    if (formData.contactNumber.startsWith(selectedCountryCode)) {
      return formData.contactNumber.slice(selectedCountryCode.length);
    }
    return formData.contactNumber;
  };

  // Handle file removal
  const handleFileRemove = () => {
    setFormData({
      ...formData,
      resume: null,
    });
    setFileDataUrl(null);
    setInputKey(Date.now()); // Reset the file input
    setErrors({
      ...errors,
      resume: "",
    });
  };

  // Function to handle uploaded file
  const handleUploadedFile = (file: File) => {
    // Check if file type is allowed
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "application/pdf"
    ) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({
          ...formData,
          resume: file,
        });
        setFileDataUrl(reader.result as string);

        setErrors({
          ...errors,
          resume: "",
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.log("Invalid file type:", file.type);
      setErrors({
        ...errors,
        resume: "Only PNG, JPG and PDF files are supported",
      });
    }
  };

  // Handle Shadcn select change for Apply For
  const handleApplyForChange = (value: string) => {
    setFormData({
      ...formData,
      applyFor: value,
    });

    if (errors.applyFor) {
      setErrors({
        ...errors,
        applyFor: "",
      });
    }
  };

  // Handle Shadcn select change for Experience
  const handleExperienceChange = (value: string) => {
    setFormData({
      ...formData,
      experience: value,
    });

    if (errors.experience) {
      setErrors({
        ...errors,
        experience: "",
      });
    }
  };

  // Validate form using Zod
  const validateForm = () => {
    try {
      // Get formatted phone number for submission
      const formattedPhoneNumber = getFormattedPhoneNumber();
      const finalNum = `+${selectedCountryCode} ${formattedPhoneNumber}`;

      // Create a copy of form data with formatted phone number
      const formDataToValidate = {
        ...formData,
        contactNumber: finalNum,
      };

      // Validate form data with Zod schema
      formSchema.parse(formDataToValidate);

      // Additional validation for resume
      if (!formData.resume) {
        setErrors({
          ...errors,
          resume: "Please upload your resume",
        });
        return false;
      }

      // Clear all errors if validation passes
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to our error format
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path) {
            const fieldName = err.path[0] as keyof FormErrors;
            newErrors[fieldName] = err.message;
          }
        });

        setErrors(newErrors);
      }
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormLoader(true);

      try {
        // Create FormData for API submission
        const apiFormData = new FormData();

        // Map form fields to API field names
        apiFormData.append('full_name', formData.fullName);
        apiFormData.append('email', formData.email);
        apiFormData.append('qualification', formData.qualification);
        apiFormData.append('contact', formData.contactNumber);
        apiFormData.append('apply_for', formData.applyFor);
        apiFormData.append('experience', formData.experience);

        // Append the resume file if it exists
        if (formData.resume) {
          apiFormData.append('file', formData.resume);
        }

        // Send data to API
        const response = await fetch('/api/send-career-email', {
          method: 'POST',
          body: apiFormData,
        });

        const result = await response.json();

        if (result.error) {
          throw new Error(result.message || 'Something went wrong');
        }

        // Show success message
        toast.success("Application submitted successfully!");

        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          qualification: "",
          applyFor: "",
          experience: "",
          resume: null,
        });
        
        // Reset file input
        setFileDataUrl(null);
        setInputKey(Date.now());
        
        // Reset any errors
        setErrors({});
        
        // Reset country code
        setSelectedCountryCode("");
        
        // Reset form using the form ref
        if (form.current) {
          form.current.reset();
        }

      } catch (error) {
        console.error('Form submission error:', error);
        toast.error(`Error: ${error instanceof Error ? error.message : 'Failed to submit application'}`);
      } finally {
        setFormLoader(false);
      }
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate ref={form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name Field */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            className={`w-full px-4 py-3 rounded-md border ${errors.fullName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className={`w-full px-4 py-3 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Contact Number Field */}
        <div>
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Contact Number
          </label>
          <PhoneInput
            country={"in"} // Default country
            value={formData.contactNumber}
            onChange={handlePhoneChange}
            inputProps={{
              name: "contactNumber",
              id: "contactNumber",
              required: true,
              className: `w-full px-4 py-3 rounded-md border ${errors.contactNumber ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-blue-500`,
            }}
            containerClass={`${errors.contactNumber ? "phone-input-error" : ""
              }`}
            // Add custom styles to match your form design
            containerStyle={{ width: "100%" }}
            inputStyle={{ width: "100%", height: "48px" }}
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>

        {/* Qualification Field */}
        <div>
          <label
            htmlFor="qualification"
            className="block text-gray-700 font-medium mb-2"
          >
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Enter Your Qualification"
            className={`w-full px-4 py-3 rounded-md border ${errors.qualification ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.qualification && (
            <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
          )}
        </div>

        {/* Apply For Field - Shadcn Select */}
        <div>
          <label
            htmlFor="applyFor"
            className="block text-gray-700 font-medium mb-2"
          >
            Apply For
          </label>
          <div className={errors.applyFor ? "border border-red-500 rounded-md" : ""}>
            <Select 
              value={formData.applyFor}
              onValueChange={handleApplyForChange}
            >
              <SelectTrigger className={`w-full px-4 py-3 h-auto rounded-md bg-white ${
                errors.applyFor ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-0`}>
                <SelectValue placeholder="Select Apply For" />
              </SelectTrigger>
              <SelectContent>
                {currentVacancy && currentVacancy.length > 0 ? (
                  currentVacancy.map((vacancy: Vacancy) => (
                    <SelectItem key={vacancy.id} value={vacancy.title}>
                      {vacancy.title}
                    </SelectItem>
                  ))
                ) : (
                  <>
                    <SelectItem value="Flutter Developer">Flutter Developer</SelectItem>
                    <SelectItem value="Laravel Developer">Laravel Developer</SelectItem>
                    <SelectItem value="SEO Expert">SEO Expert</SelectItem>
                    <SelectItem value="Digital Marketer">Digital Marketer</SelectItem>
                    <SelectItem value="Social Media Manager + Content Writer">
                      Social Media Manager + Content Writer
                    </SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>
          {errors.applyFor && (
            <p className="text-red-500 text-sm mt-1">{errors.applyFor}</p>
          )}
        </div>

        {/* Experience Field - Shadcn Select */}
        <div>
          <label
            htmlFor="experience"
            className="block text-gray-700 font-medium mb-2"
          >
            Experience
          </label>
          <div className={errors.experience ? "border border-red-500 rounded-md" : ""}>
            <Select 
              value={formData.experience}
              onValueChange={handleExperienceChange}
            >
              <SelectTrigger className={`w-full px-4 py-3 h-auto rounded-md bg-white ${
                errors.experience ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-0`}>
                <SelectValue placeholder="Select Your Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fresher">Fresher</SelectItem>
                <SelectItem value="1+ Years">1+ Years</SelectItem>
                <SelectItem value="3+ Years">3+ Years</SelectItem>
                <SelectItem value="5+ Years">5+ Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
          )}
        </div>
      </div>

      {/* Upload File Field with React Dropzone */}
      <div>
        <label
          htmlFor="resume"
          className="block text-gray-700 font-medium mb-2"
        >
          Upload File
        </label>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-md p-8 text-center transition-colors duration-200 bg-[#f8f8f9] ${isDragActive
              ? "border-blue-500 bg-blue-50"
              : errors.resume
                ? "border-red-500"
                : "border-gray-300"
            }`}
          style={{ position: 'relative', minHeight: '150px' }}
        >
          <input {...getInputProps()} id="resume" name="resume" key={inputKey} />

          {formData.resume ? (
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-gray-700 mb-2">
                Uploaded File: {formData.resume.name}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFileRemove();
                }}
                className="flex items-center text-red-500 hover:text-red-700 transition-colors"
              >
                Remove Selected File{" "}
                <IoIosCloseCircle className="ml-1" size={20} />
              </button>

              {fileDataUrl && formData.resume.type.includes("image") && (
                <div className="mt-4 max-w-xs">
                  <img
                    src={fileDataUrl}
                    alt="Preview"
                    className="max-h-40 object-contain"
                  />
                </div>
              )}

              {fileDataUrl && formData.resume.type === "application/pdf" && (
                <div className="mt-4">
                  <p className="text-gray-600">PDF file selected</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              {isDragActive ? (
                <div className="flex flex-col items-center justify-center">
                  <FiUploadCloud className="h-12 w-12 text-blue-500 mb-4" />
                  <p className="text-lg text-blue-500 mb-2">
                    Drop your file here
                  </p>
                </div>
              ) : (
                <div 
                  className="cursor-pointer flex flex-col items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('resume')?.click();
                  }}
                >
                  <FiUploadCloud className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg text-gray-500 mb-2">
                    Choose A File Or Drag It Here.
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    (Only PNG, JPG and PDF Files are supported)
                  </p>                  
                </div>
              )}
            </div>
          )}
        </div>
        {errors.resume && (
          <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="flexCenter commonBtn"
          disabled={formLoader}
        >
          {formLoader ? (
            <span className="flexCenter">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Apply"
          )}
        </button>
      </div>
    </form>
  );
}
