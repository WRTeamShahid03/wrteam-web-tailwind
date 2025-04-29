import { useState, FormEvent, ChangeEvent, JSX, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import toast from "react-hot-toast";

interface FeedbackDialogProps {
  initialOpen?: boolean;
  onClose?: () => void;
}
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

export default function FeedbackDialog({
  initialOpen = false,
  onClose,
}: FeedbackDialogProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(initialOpen);
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

        // Only add product if it has a value, otherwise add empty string
        const productValue = formData.product.trim();
        apiFormData.append('product', productValue ? productValue : "-");

        apiFormData.append('message', formData.message);

        try {
          // Try the API endpoint
          const response = await fetch("/api/feedback", {
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

    setOpen(false);

    // Reset form fields
    if (form.current) {
      form.current.reset();
    }

    // Hide success message after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="">
        <button className="inline-flex items-center bg-white text-[#171B26] px-4 py-2 rounded-md font-medium text-sm transition hover:bg-gray-200">
          Feedback
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md overflow-hidden [&>.ring-offset-white]:!bg-black [&>.ring-offset-white]:!p-2 [&>.ring-offset-white]:!text-white [&>.ring-offset-white]:!opacity-100">
        {/* <div
          className="absolute right-4 top-4 bg-black text-white flexCenter w-8 h-8 rounded-[8px] cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <IoMdClose size={18} />
        </div> */}

        <DialogHeader className='pb-6 relative after:content-[""] after:absolute after:bottom-0 after:-left-6 after:w-[120%] after:h-[1px] after:bg-[#D8E0E6]'>
          <DialogTitle className="text-2xl font-bold">
            We Value Your Feedback!
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Your thoughts help us improve! Please share your feedback,
            suggestions, or concerns so we can enhance your experience.
          </DialogDescription>
        </DialogHeader>

        <form ref={form} onSubmit={handleSubmit} noValidate className="space-y-6 pt-4">
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
              Product
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

          <div className="flex justify-end gap-4">
            <button type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 flexCenter gap-2 rounded-[8px]"
            >
              {/* Send <FaArrowRight /> */}
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
                  Sending...
                </span>
              ) : <>
                Send <FaArrowRight />
              </>
              }
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
