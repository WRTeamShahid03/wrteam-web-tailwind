"use client";

import { useState, FormEvent, useRef } from "react";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Check } from "lucide-react"

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
    const [formLoader, setFormLoader] = useState<boolean>(false);

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
                    product: ""
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
                        htmlFor="fullName"
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
                                                onSelect={(currentValue) => {
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
