"use client";

import { useState, FormEvent, useRef } from "react";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Check } from "lucide-react"
import { toast } from "react-hot-toast";

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { FaChevronDown } from "react-icons/fa";

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

// Define Zod schema for form validation
const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    contactNumber: z
        .string()
        .min(8, "Contact number is too short")
        .max(20, "Contact number is too long"),
    product: z.string().min(1, "Please select a product"),
});

// Define a type for form data based on the schema
type FormData = z.infer<typeof formSchema>

// Define a type for form errors
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ExclusiveLicenseForm() {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        contactNumber: "",
        product: ""
    });

    // Form errors state
    const [errors, setErrors] = useState<FormErrors>({});

    // State for country code
    const [selectedCountryCode, setSelectedCountryCode] = useState("");

    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

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

    // Handle successful submission
    const handleSuccess = () => {
        setSubmitSuccess(true);
        toast.success("Your exclusive license request has been submitted successfully!");
        
        // Reset form
        setFormData({
            fullName: "",
            email: "",
            contactNumber: "",
            product: "",
        });
        
        // Reset form fields
        if (form.current) {
            form.current.reset();
        }
        
        // Reset product selection UI
        setValue("");
    };

    // Email fallback method when API fails
    const handleEmailFallback = (data: FormData) => {
        // Update support email to match your actual support email
        const supportEmail = "licenses@wrteam.in";
        
        try {
            // Create a mailto link as fallback
            const mailtoLink = `mailto:${supportEmail}?subject=${encodeURIComponent(`Exclusive License Request for ${data.product}`)}&body=${encodeURIComponent(`Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.contactNumber}\nProduct: ${data.product}`)}`;
            
            // Open mailto link
            window.open(mailtoLink, '_blank');
            
            toast.success("We've opened an email window for you to send your license request directly to our team. Please send the email to complete your request.");
            
            // Show a message explaining what to do if the email client doesn't open
            toast(`If your email client didn't open, please send an email to ${supportEmail} with your details.`, {
                duration: 8000 // Show this message longer
            });
            
            // Still mark as success since we provided an alternative
            setSubmitSuccess(true);
            
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                contactNumber: "",
                product: "",
            });
            
            // Reset product selection UI
            setValue("");
            
            if (form.current) {
                form.current.reset();
            }
        } catch (emailError) {
            console.error("Email fallback error:", emailError);
            
            // Give the user direct instructions for manual contact
            toast.error(
                `Please contact us directly at ${supportEmail} with your name, email, phone, and the product you're interested in.`,
                { duration: 10000 } // Keep this message visible longer
            );
        }
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setIsSubmitting(true);
                
                // Get formatted phone number for submission
                const formattedPhoneNumber = getFormattedPhoneNumber();
                const finalNum = `+${selectedCountryCode} ${formattedPhoneNumber}`;
                
                // Create FormData for submission to API
                const apiFormData = new FormData();
                apiFormData.append('email', formData.email);
                apiFormData.append('message', "Exclusive License");
                apiFormData.append('name', formData.fullName);
                apiFormData.append('phone', finalNum);
                apiFormData.append('product', formData.product);
                apiFormData.append('subject', "Exclusive License");
                
                try {
                    // First try the API endpoint
                    const response = await fetch('/api/contact-us', {
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

    return (
        <form className="space-y-6" onSubmit={handleSubmit} noValidate ref={form}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name Field */}
                <div>
                    <label
                        htmlFor="fullName"
                        className="block font-medium mb-2"
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
                        className="block font-medium mb-2"
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
                        className="block font-medium mb-2"
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

                {/* product */}
                <div>
                    <label
                        htmlFor="product"
                        className="block font-medium mb-2"
                    >
                        Product
                    </label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <button
                                id="product"
                                name="product"
                                className={`w-full text-start textSecondary px-4 py-3 bg-[#fafafa] border-[#d3d3d3] rounded-md border ${errors.product ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white`}
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
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search product..." className="h-9" />
                                <CommandList>
                                    <CommandEmpty>No item found.</CommandEmpty>
                                    <CommandGroup>
                                        {products.map((item) => (
                                            <CommandItem
                                                key={item.value}
                                                value={item.value}
                                                onSelect={(currentValue: string) => {
                                                    // Use handleChange to update form data
                                                    handleChange({
                                                        name: "product",
                                                        value: currentValue === value ? "" : currentValue
                                                    });

                                                    // Update the displayed value
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
                    {errors.product && (
                        <p className="text-red-500 text-sm mt-1">{errors.product}</p>
                    )}
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
                <button
                    type="submit"
                    className="flexCenter commonBtn"
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
                        "Submit"
                    )}
                </button>
            </div>

            {/* Success Message */}
            {/* {submitSuccess && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mt-4">
                    Thank you for your exclusive license request! We have received your inquiry and will get back to you shortly with pricing and licensing details.
                </div>
            )} */}
        </form>
    );
}