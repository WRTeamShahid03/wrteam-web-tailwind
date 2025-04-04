"use client";

import React, { useState, FormEvent, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";
import axios from "axios";

// Form data interface
interface FormData {
    name: string;
    email: string;
    phone: string;
    budget: string;
    message: string;
}

// Form errors interface
interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    budget?: string;
    message?: string;
}

const HireUsForm = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
    });

    // Form errors state
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // State for country code
    const [selectedCountryCode, setSelectedCountryCode] = useState("");

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
            phone: value,
        });

        setSelectedCountryCode(country?.dialCode || "");

        // Clear error when user types
        if (errors.phone) {
            setErrors({
                ...errors,
                phone: "",
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors: FormErrors = {};
        
        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        
        // Validate email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        
        // Validate phone
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (formData.phone.length < 8) {
            newErrors.phone = "Phone number is too short";
        }
        
        // Validate budget
        if (!formData.budget) {
            newErrors.budget = "Please select a budget";
        }
        
        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        console.log(formData,'formData');

        if (validateForm()) {
            try {
                setIsSubmitting(true);
                
                // Format phone with country code if needed
                const formattedPhone = formData.phone.startsWith('+') 
                    ? formData.phone 
                    : `+${formData.phone}`;
                
                // Create form data for submission
                const formDataToSubmit = new FormData();
                formDataToSubmit.append('name', formData.name);
                formDataToSubmit.append('email', formData.email);
                formDataToSubmit.append('phone', formattedPhone);
                formDataToSubmit.append('budget', formData.budget);
                formDataToSubmit.append('message', formData.message);

                console.log(formDataToSubmit,'formDataToSubmit');
                
                // Submit form data to API
                const response = await axios.post('/api/hire-us', formDataToSubmit);

                console.log(response,'response');
                
                if (response.data.error === false) {
                    // Show success message
                    setSubmitSuccess(true);
                    toast.success("Your request has been submitted successfully!");
                    
                    // Reset form
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        budget: "",
                        message: "",
                    });
                    
                    // Reset form fields
                    if (form.current) {
                        form.current.reset();
                    }
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("Failed to submit your request. Please try again later.");
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Scroll to the first error
            const firstErrorField = Object.keys(errors)[0];
            const element = document.getElementById(firstErrorField);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.focus();
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
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                        className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Contact Number Field */}
                <div>
                    <PhoneInput
                        country={"in"} // Default country
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                            name: "phone",
                            id: "phone",
                            required: true,
                            className: `w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`,
                        }}
                        containerClass={`${errors.phone ? "phone-input-error" : ""}`}
                        containerStyle={{ width: "100%" }}
                        inputStyle={{ width: "100%", height: "48px" }}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                </div>

                {/* Budget Field */}
                <div>
                    <Select onValueChange={(value) => handleChange({ name: "budget", value })}>
                        <SelectTrigger className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.budget ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-none`}>
                            <SelectValue placeholder="Your Budget" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Below-$1000">Below $1000</SelectItem>
                                <SelectItem value="$1000-$5000">$1000-$5000</SelectItem>
                                <SelectItem value="Above-$5000">Above $5000</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {errors.budget && (
                        <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        rows={10}
                        onChange={handleChange}
                        placeholder="Your message"
                        className={`w-full px-2 py-1.5 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.message ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8 w-full">
                <button
                    type="submit"
                    className="commonBtn !w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
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
                        "Submit Request"
                    )}
                </button>
            </div>

            {/* Success Message */}
            {submitSuccess && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md">
                    Thank you for your interest in hiring us! Your request has been received, and we'll get back to you shortly.
                </div>
            )}
        </form>
    );
};

export default HireUsForm;