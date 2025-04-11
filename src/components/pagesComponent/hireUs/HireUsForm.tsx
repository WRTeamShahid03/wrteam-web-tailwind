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

        if (validateForm()) {
            try {
                setIsSubmitting(true);
                
                // Create FormData for submission to API
                const apiFormData = new FormData();
                apiFormData.append('name', formData.name);
                apiFormData.append('email', formData.email);
                apiFormData.append('phone', formData.phone);
                apiFormData.append('budget', formData.budget);
                apiFormData.append('message', formData.message);
                
                try {
                    // First try the API endpoint
                    const response = await fetch('/api/hire-us', {
                        method: 'POST',
                        body: apiFormData,
                    });
                    
                    const responseData = await response.json();
                    
                    // Check if the response is successful
                    if (response.ok && responseData && responseData.error === false) {
                        // Success scenario
                        handleSuccess();
                        return;
                    } else {
                        // API returned an error response
                        console.error("API error response:", responseData);
                        
                        // Show a specific error message if available
                        if (responseData.details && responseData.details.includes("405")) {
                            toast.error("The server doesn't support this request method. We'll use the email option instead.");
                        } else if (responseData.status === 404) {
                            toast.error("The API endpoint couldn't be found. We'll use the email option instead.");
                        } else {
                            toast.error(responseData.message || "There was an error submitting your request.");
                        }
                        
                        // Use email fallback
                        handleEmailFallback(formData);
                    }
                } catch (apiError) {
                    console.error("API request failed:", apiError);
                    toast.error("We couldn't connect to our server. We'll use the email option instead.");
                    
                    // Use email fallback on API failure
                    handleEmailFallback(formData);
                }
            } catch (error) {
                console.error("Error in form submission:", error);
                toast.error("We're experiencing technical difficulties. Please use the email option.");
                
                // Always fall back to email option on any error
                handleEmailFallback(formData);
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

    // Handle successful submission
    const handleSuccess = () => {
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
    };

    // Email fallback method when API fails
    const handleEmailFallback = (data: any) => {
        // Update support email to match your actual support email
        const supportEmail = "support@wrteam.in";
        
        try {
            // Create a mailto link as fallback
            const mailtoLink = `mailto:${supportEmail}?subject=Hire%20Us%20Request%20from%20${encodeURIComponent(data.name)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nBudget: ${data.budget}\nMessage: ${data.message}`)}`;
            
            // Open mailto link
            window.open(mailtoLink, '_blank');
            
            toast.success("We've opened an email window for you to send your request directly to our team. Please send the email to complete your request.");
            
            // Show a message explaining what to do if the email client doesn't open
            toast(`If your email client didn't open, please send an email to ${supportEmail} with your details.`, {
                duration: 8000 // Show this message longer
            });
            
            // Still mark as success since we provided an alternative
            setSubmitSuccess(true);
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                budget: "",
                message: "",
            });
            
            if (form.current) {
                form.current.reset();
            }
        } catch (emailError) {
            console.error("Email fallback error:", emailError);
            
            // Give the user direct instructions for manual contact
            toast.error(
                `Please contact us directly at ${supportEmail} with the following information: Your name, email, phone, budget, and message.`,
                { duration: 10000 } // Keep this message visible longer
            );
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
                    <Select 
                        value={formData.budget} 
                        onValueChange={(value) => handleChange({ name: "budget", value })}
                    >
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