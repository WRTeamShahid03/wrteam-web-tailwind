"use client";

import { useState, FormEvent, useRef } from "react";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Define Zod schema for form validation
const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    contactNumber: z
        .string()
        .min(8, "Contact number is too short")
        .max(20, "Contact number is too long"),
    message: z.string().min(1, "Message is required"),
    budget: z.string().min(1, "Please select a budget"),
});

// Define a type for form data based on the schema
type FormData = z.infer<typeof formSchema>

// Define a type for form errors
type FormErrors = Partial<Record<keyof FormData, string>>;

import { FaChevronDown } from "react-icons/fa";

const HireUsForm = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        contactNumber: "",
        budget: "",
        message: "",
    });

    // Form errors state
    const [errors, setErrors] = useState<FormErrors>({});

    // State for country code
    const [selectedCountryCode, setSelectedCountryCode] = useState("");

    // State for file upload
    const [fileDataUrl, setFileDataUrl] = useState<string | null>(null);
    const [inputKey, setInputKey] = useState<number>(Date.now());
    const [formLoader, setFormLoader] = useState<boolean>(false);

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
                    message: "",
                    budget: "",
                });

                // Show success message
                alert("Application submitted successfully!");

                // Reset loader
                setFormLoader(false);
            }, 1000);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit} noValidate ref={form}>
            <div className="grid grid-cols-1 gap-6">
                {/* Full Name Field */}
                <div>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.fullName ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
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
                        placeholder="Your Email"
                        className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Contact Number Field */}
                <div>
                    <PhoneInput
                        country={"in"} // Default country
                        value={formData.contactNumber}
                        onChange={handlePhoneChange}
                        inputProps={{
                            name: "contactNumber",
                            id: "contactNumber",
                            required: true,
                            className: `w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.contactNumber ? "border-red-500" : "border-gray-300"
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

                {/* Buget Field */}
                <div>
                    <Select onValueChange={(value) => handleChange({ name: "budget", value })}>
                        <SelectTrigger className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.message ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-none`}>
                            <SelectValue placeholder="Your Budget" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup >
                                <SelectItem value="Below-$1000">Below-$1000</SelectItem>
                                <SelectItem value="$1000-$5000">$1000-$5000</SelectItem>
                                <SelectItem value="Above-$5000">Above-$5000</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {errors.budget && (
                        <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                    )}
                </div>



                {/* message Field */}
                <div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        rows={10}
                        onChange={handleChange}
                        placeholder="Your message"
                        className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.message ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
                <button
                    type="submit"
                    className="commonBtn commonBtnSecondaryBg !w-full"
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
                        "Submit"
                    )}
                </button>
            </div>
        </form>
    );
}

export default HireUsForm