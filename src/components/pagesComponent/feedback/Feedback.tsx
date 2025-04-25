'use client'
import { useState, FormEvent, ChangeEvent, useRef } from "react";
import { toast } from "react-hot-toast";

// Interface for form data
interface FeedbackData {
    name: string;
    product: string;
    message: string;
}

// Interface for form errors
interface FormErrors {
    name?: string;
    product?: string;
    message?: string;
}

const Feedback = () => {
    // Form state
    const [formData, setFormData] = useState<FeedbackData>({
        name: "",
        product: "",
        message: ""
    });

    // Form errors and submission states
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Form ref
    const form = useRef<HTMLFormElement>(null);

    // Handle input change
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    // Validate form
    const validateForm = () => {
        const newErrors: FormErrors = {};

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Validate product
        // if (!formData.product.trim()) {
        //     newErrors.product = "Product name is required";
        // }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = "Feedback message is required";
        } else if (formData.message.length < 5) {
            newErrors.message = "Please provide more detailed feedback";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setIsSubmitting(true);

                // Create FormData for submission to API
                const apiFormData = new FormData();
                apiFormData.append('name', formData.name);
                apiFormData.append('product', formData.product);
                apiFormData.append('message', formData.message);

                try {
                    // Try the API endpoint
                    const response = await fetch("/api/contact-us", {
                        method: "POST",
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
                        toast.error(
                            responseData.message || "There was an error submitting your feedback."
                        );
                    }
                } catch (apiError) {
                    console.error("API request failed:", apiError);
                    toast.error("We couldn't connect to our server. Trying alternative method.");
                }
            } catch (error) {
                console.error("Error in form submission:", error);
                toast.error("We're experiencing technical difficulties. Please try again later.");
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Scroll to the first error
            const firstErrorField = Object.keys(errors)[0];
            const element = document.getElementById(firstErrorField);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                element.focus();
            }
        }
    };

    // Handle successful submission
    const handleSuccess = () => {
        setSubmitSuccess(true);
        toast.success("Thank you for your feedback!");

        // Reset form
        setFormData({
            name: "",
            product: "",
            message: "",
        });

        // Reset form fields
        if (form.current) {
            form.current.reset();
        }
    };



    return (
        <div className="container h-screen flexColCenter lg:w-1/2 gap-12">
            <div className="flexColCenter commonTextGap text-center">
                <h1 className="sectionTitle font-bold">We Value Your Feedback!</h1>
                <p className="sectionPara">Your thoughts help us improve! Please share your feedback, suggestions, or concerns so we can enhance your experience.</p>
            </div>
            <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-6 border border-gray-300 rounded-md p-8 w-full"
                noValidate
            >
                <div className="space-y-2">
                    <label htmlFor="name" className="text-base font-medium flex">
                        Your Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`border ${errors.name ? "border-red-500" : "border-gray-300"
                            } rounded w-full py-2 px-4`}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="product" className="text-base font-medium flex">
                        Product <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        id="product"
                        name="product"
                        placeholder="Enter Product Name"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className={`border ${errors.product ? "border-red-500" : "border-gray-300"
                            } rounded w-full py-2 px-4`}
                    />
                    {errors.product && (
                        <p className="text-red-500 text-sm mt-1">{errors.product}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-base font-medium flex">
                        Feedback Message <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write Message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`min-h-32 border ${errors.message ? "border-red-500" : "border-gray-300"
                            } rounded w-full py-2 px-4`}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                    <button
                        type="submit"
                        className="commonBtn commonBtnSecondaryBg"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
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
                                Submitting...
                            </span>
                        ) : (
                            "Submit Feedback"
                        )}
                    </button>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                    <div className="bg-green-100 text-green-800 p-4 rounded-md">
                        Thank you for your feedback! We appreciate your input and will use it to improve our services.
                    </div>
                )}
            </form>
        </div>
    );
};

export default Feedback;