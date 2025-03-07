"use client";

import { useState, FormEvent, useRef } from "react";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";

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

export default function CareerForm() {
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

  // Form ref
  const form = useRef<HTMLFormElement>(null);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Check if a file is selected
      if (file) {
        const fileType = file.type;

        // Check if file type is allowed
        if (
          fileType === "image/png" ||
          fileType === "image/jpeg" ||
          fileType === "application/pdf"
        ) {
          const reader = new FileReader();

          reader.onloadend = () => {
            // After reading the file, set it in the state
            setFormData({
              ...formData,
              resume: file,
            });
            setFileDataUrl(reader.result as string);

            // Clear error
            setErrors({
              ...errors,
              resume: "",
            });
          };

          // Read the file as a data URL
          reader.readAsDataURL(file);
        } else {
          setErrors({
            ...errors,
            resume: "Only PNG, JPG and PDF files are supported",
          });
        }
      }
    }
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
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormLoader(true);

      // Get formatted phone number for submission
      const formattedPhoneNumber = getFormattedPhoneNumber();
      const finalNum = `+${selectedCountryCode} ${formattedPhoneNumber}`;

      // Create a copy of form data with formatted phone number for submission
      const formDataToSubmit = {
        ...formData,
        contactNumber: finalNum,
      };

      // Form is valid, submit data
      console.log("Form submitted:", formDataToSubmit);

      // Here you would typically make an API call to submit the form
      // Similar to your careerMailApi call in the old code

      // Simulate API call with timeout
      setTimeout(() => {
        // Reset form after submission
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          qualification: "",
          applyFor: "",
          experience: "",
          resume: null,
        });

        // Reset file upload
        handleFileRemove();

        // Show success message
        alert("Application submitted successfully!");

        // Reset loader
        setFormLoader(false);
      }, 1000);
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
            className={`w-full px-4 py-3 rounded-md border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
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
            className={`w-full px-4 py-3 rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
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
              className: `w-full px-4 py-3 rounded-md border ${
                errors.contactNumber ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-1 focus:ring-blue-500`,
            }}
            containerClass={`${
              errors.contactNumber ? "phone-input-error" : ""
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
            className={`w-full px-4 py-3 rounded-md border ${
              errors.qualification ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.qualification && (
            <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
          )}
        </div>

        {/* Apply For Field */}
        <div>
          <label
            htmlFor="applyFor"
            className="block text-gray-700 font-medium mb-2"
          >
            Apply For
          </label>
          <select
            id="applyFor"
            name="applyFor"
            value={formData.applyFor}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.applyFor ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white`}
          >
            <option value="" disabled>
              Select Apply For
            </option>
            <option value="flutter">Flutter Developer</option>
            <option value="laravel">Laravel Developer</option>
            <option value="seo">SEO Expert</option>
            <option value="digital">Digital Marketer</option>
            <option value="social">
              Social Media Manager + Content Writer
            </option>
          </select>
          {errors.applyFor && (
            <p className="text-red-500 text-sm mt-1">{errors.applyFor}</p>
          )}
        </div>

        {/* Experience Field */}
        <div>
          <label
            htmlFor="experience"
            className="block text-gray-700 font-medium mb-2"
          >
            Experience
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${
              errors.experience ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white`}
          >
            <option value="" disabled>
              Select Your Experience
            </option>
            <option value="Fresher">Fresher</option>
            <option value="1+ Years">1+ Years</option>
            <option value="3+ Years">3+ Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
          )}
        </div>
      </div>

      {/* Upload File Field */}
      <div>
        <label
          htmlFor="resume"
          className="block text-gray-700 font-medium mb-2"
        >
          Upload File
        </label>
        <div
          className={`border-2 border-dashed ${
            errors.resume ? "border-red-500" : "border-gray-300"
          } rounded-md p-8 text-center`}
        >
          {formData.resume ? (
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-gray-700 mb-2">
                Uploaded File: {formData.resume.name}
              </p>
              <button
                type="button"
                onClick={handleFileRemove}
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
                  {/* You can add PDF preview here if needed */}
                </div>
              )}
            </div>
          ) : (
            <label
              htmlFor="resume"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <FiUploadCloud className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg text-gray-500 mb-2">
                Choose A File Or Drag It Here.
              </p>
              <p className="text-sm text-gray-400">
                (Only PNG, JPG and PDF Files are supported)
              </p>
            </label>
          )}

          <input
            type="file"
            id="resume"
            name="resume"
            key={inputKey}
            onChange={handleFileChange}
            className="hidden"
            accept=".png,.jpg,.jpeg,.pdf"
          />
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
