"use client";

import React, { useState, useRef, FormEvent } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FiUpload } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from 'axios';
import { toast } from 'react-hot-toast';

// Form data types
interface FormData {
  user_name: string;
  email: string;
  contact: string;
  requirement_explanation: string;
  product_name: string;
  requirement_file: File | null;
}

// Form errors interface
interface FormErrors {
  user_name?: string;
  email?: string;
  contact?: string;
  requirement_explanation?: string;
  product_name?: string;
  requirement_file?: string;
}

// Product options for dropdown
const products = [
  {
    value: 'eSchool SAAS',
    label: 'eSchool SAAS',
  },
  {
    value: 'eRestro- Single',
    label: 'eRestro- Single',
  },
  {
    value: 'eBroker',
    label: 'eBroker',
  },
  {
    value: 'eDemand',
    label: 'eDemand',
  },
  {
    value: 'eGrocer',
    label: 'eGrocer',
  },
  {
    value: 'eSchool',
    label: 'eSchool',
  },
  {
    value: 'eRestro- multi',
    label: 'eRestro- multi',
  },
  {
    value: 'Elite Quiz web',
    label: 'Elite Quiz web',
  },
  {
    value: 'eSpeech',
    label: 'eSpeech',
  },
  {
    value: 'Prime web',
    label: 'Prime web',
  },
  {
    value: 'eShop - multi',
    label: 'eShop - multi',
  },
  {
    value: 'Smartkit pro',
    label: 'Smartkit pro',
  },
  {
    value: 'Tic-tac-toe',
    label: 'Tic-tac-toe',
  },
  {
    value: 'Elite Quiz app',
    label: 'Elite Quiz app',
  },
  {
    value: 'Qearner',
    label: 'Qearner',
  },
  {
    value: 'eCart web - multi',
    label: 'eCart web - multi',
  },
  {
    value: 'eBook app',
    label: 'eBook app',
  },
  {
    value: 'News',
    label: 'News',
  },
  {
    value: 'eCart - multi vendor system',
    label: 'eCart - multi vendor system',
  },
  {
    value: 'eShop manager- admin',
    label: 'eShop manager- admin',
  },
  {
    value: 'eShop - web - single',
    label: 'eShop - web - single',
  },
  {
    value: 'eShop - app - single',
    label: 'eShop - app - single',
  },
  {
    value: 'eCart web',
    label: 'eCart web',
  },
  {
    value: 'Radio',
    label: 'Radio',
  },
  {
    value: 'Quiz online iOS',
    label: 'Quiz online iOS',
  },
  {
    value: 'Quiz online android',
    label: 'Quiz online android',
  },
  {
    value: 'eCart- app',
    label: 'eCart- app',
  },
  {
    value: 'Quotes app',
    label: 'Quotes app',
  },
  {
    value: 'eClassify',
    label: 'eClassify',
  },
];

const CustomizationForm = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    email: "",
    contact: "",
    requirement_explanation: "",
    product_name: "",
    requirement_file: null,
  });

  // Form errors state
  const [errors, setErrors] = useState<FormErrors>({});

  // State for country code
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  // State for file upload
  const [fileDataUrl, setFileDataUrl] = useState<string | null>(null);
  const [inputKey, setInputKey] = useState<number>(Date.now());
  const [formLoader, setFormLoader] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  // Form ref
  const form = useRef<HTMLFormElement>(null);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> |
    { name: string, value: string }
  ) => {
    // Check if the input is an event or an object with name and value
    const name = typeof e === 'object' && 'name' in e ? e.name : (e.target as HTMLInputElement).name;
    const value = typeof e === 'object' && 'value' in e ? e.value : (e.target as HTMLInputElement).value;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user selects or types
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
      contact: value,
    });

    setSelectedCountryCode(country?.dialCode || "");

    // Clear error when user types
    if (errors.contact) {
      setErrors({
        ...errors,
        contact: "",
      });
    }
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB

    // Check file size
    if (file.size > maxSize) {
      setErrors({
        ...errors,
        requirement_file: "File size must be less than 5MB",
      });
      return;
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      setErrors({
        ...errors,
        requirement_file: "File must be an image (JPG, PNG) or PDF",
      });
      return;
    }

    // Set file to form data
            setFormData({
              ...formData,
      requirement_file: file,
            });

    // Clear errors
    if (errors.requirement_file) {
            setErrors({
              ...errors,
        requirement_file: "",
      });
    }

    // Preview image if it's an image
    if (file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileDataUrl(reader.result as string);
      };
          reader.readAsDataURL(file);
        } else {
      setFileDataUrl(null);
    }
  };

  // Handle file removal
  const handleFileRemove = () => {
    setFormData({
      ...formData,
      requirement_file: null,
    });
    setFileDataUrl(null);
    setInputKey(Date.now()); // Reset file input
  };

  // Form validation
  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Validate user name
    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Validate contact
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (formData.contact.length < 10) {
      newErrors.contact = "Contact number is invalid";
    }

    // Validate product
    if (!formData.product_name.trim()) {
      newErrors.product_name = "Please select a product";
    }

    // Validate explanation
    if (!formData.requirement_explanation.trim()) {
      newErrors.requirement_explanation = "Explanation is required";
    } else if (formData.requirement_explanation.length < 20) {
      newErrors.requirement_explanation = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormLoader(true);
      setSubmitSuccess(false);

      try {
        // Create form data for API call
        const submitFormData = new FormData();
        submitFormData.append('user_name', formData.user_name);
        submitFormData.append('email', formData.email);
        submitFormData.append('contact', formData.contact);
        submitFormData.append('product_name', formData.product_name);
        submitFormData.append('requirement_explanation', formData.requirement_explanation);
        
        if (formData.requirement_file) {
          submitFormData.append('requirement_file', formData.requirement_file);
        }

        // Submit form data to API
        const response = await axios.post('/api/customization-requirements', submitFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });

        if (response.data && !response.data.error) {
          // Reset form on success
          setFormData({
            user_name: "",
            email: "",
            contact: "",
            requirement_explanation: "",
            product_name: "",
            requirement_file: null,
          });
          setValue("");
        handleFileRemove();
          setSubmitSuccess(true);
          toast.success("Your customization request has been submitted successfully!");
        } else {
          toast.error(response.data.message || "Failed to submit form. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setFormLoader(false);
      }
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate ref={form}>
      <div className="grid grid-cols-1 gap-6">
        {/* Full Name Field */}
        <div>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.user_name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.user_name && (
            <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
          )}
        </div>

        {/* Contact Number Field */}
        <div>
          <PhoneInput
            country={"in"} // Default country
            value={formData.contact}
            onChange={handlePhoneChange}
            inputProps={{
              name: "contact",
              id: "contact",
              required: true,
              className: `w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.contact ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`,
            }}
            containerClass={`${errors.contact ? "phone-input-error" : ""}`}
            containerStyle={{ width: "100%" }}
            inputStyle={{ width: "100%", height: "48px" }}
          />
          {errors.contact && (
            <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
          )}
        </div>

        {/* Product */}
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                id="product_name"
                name="product_name"
                className={`w-full text-start textSecondary px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.product_name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white`}
              >
                {value
                  ? products.find((item) => item.value === value)?.label
                  :
                  <div className="flexCenter !justify-between">
                    <span>Product Name</span>
                    <span><FaChevronDown /></span>
                  </div>
                }
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="Search product..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No item found.</CommandEmpty>
                  <CommandGroup>
                    {products.map((item) => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onSelect={(currentValue) => {
                          // Update form data
                          handleChange({
                            name: "product_name",
                            value: currentValue === value ? "" : currentValue
                          });

                          // Update displayed value
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {item.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === item.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {errors.product_name && (
            <p className="text-red-500 text-sm mt-1">{errors.product_name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Upload File Field */}
        <div>
          <div
            className={`bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.requirement_file ? "border-red-500" : "border-gray-300"} rounded-md text-center`}
          >
            {formData.requirement_file ? (
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-lg text-gray-700 mb-2">
                  Uploaded File: {formData.requirement_file.name}
                </p>
                <button
                  type="button"
                  onClick={handleFileRemove}
                  className="flex items-center text-red-500 hover:text-red-700 transition-colors"
                >
                  Remove Selected File{" "}
                  <IoIosCloseCircle className="ml-1" size={20} />
                </button>

                {fileDataUrl && formData.requirement_file.type.includes("image") && (
                  <div className="mt-4 max-w-xs">
                    <img
                      src={fileDataUrl}
                      alt="Preview"
                      className="max-h-40 object-contain"
                    />
                  </div>
                )}

                {formData.requirement_file.type === "application/pdf" && (
                  <div className="mt-4">
                    <p className="text-gray-600">PDF file selected</p>
                  </div>
                )}
              </div>
            ) : (
              <label
                htmlFor="requirement_file"
                className="cursor-pointer flex items-center justify-between"
              >
                <span className="textSecondary pl-2">Upload File</span>
                <div className="primaryBg text-white flexCenter h-full rounded-e-md py-1.5 px-2 gap-2">
                  <FiUpload size={26} color='white' /> Upload
                </div>
              </label>
            )}

            <input
              type="file"
              id="requirement_file"
              name="requirement_file"
              key={inputKey}
              onChange={handleFileChange}
              className="hidden"
              accept=".png,.jpg,.jpeg,.pdf"
            />
          </div>
          {errors.requirement_file && (
            <p className="text-red-500 text-sm mt-1">{errors.requirement_file}</p>
          )}
        </div>

        {/* Explanation Field */}
        <div>
          <textarea
            id="requirement_explanation"
            name="requirement_explanation"
            value={formData.requirement_explanation}
            onChange={handleChange}
            placeholder="Explain what you need for customization..."
            rows={10}
            className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.requirement_explanation ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.requirement_explanation && (
            <p className="text-red-500 text-sm mt-1">{errors.requirement_explanation}</p>
          )}
      </div>

      {/* Submit Button */}
        <div className='w-full'>
        <button
          type="submit"
          disabled={formLoader}
            className={`!w-full commonBtn ${formLoader ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {formLoader ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="bg-green-100 text-green-800 p-4 rounded-md">
            Thank you! Your customization request has been received. We'll get back to you shortly.
          </div>
        )}
      </div>
    </form>
  );
};

export default CustomizationForm;