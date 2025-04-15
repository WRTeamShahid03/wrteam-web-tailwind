import { useState, FormEvent, ChangeEvent, JSX } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { IoMdClose } from 'react-icons/io';
import { MdSend } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';

interface FeedbackDialogProps {
  initialOpen?: boolean;
  onSubmit?: (data: { name: string; message: string }) => void;
  onClose?: () => void;
}

export default function FeedbackDialog({
  initialOpen = false,
  onSubmit,
  onClose
}: FeedbackDialogProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(initialOpen);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission logic here
    const feedbackData = { name, message };
    console.log(feedbackData);

    if (onSubmit) {
      onSubmit(feedbackData);
    }

    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleClose = (): void => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="inline-flex items-center bg-white text-[#171B26] px-4 py-2 rounded-md font-medium text-sm transition hover:bg-gray-200"
        >
          Feedback
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md overflow-hidden">
        <div className="absolute right-4 top-4 bg-black text-white flexCenter w-8 h-8 rounded-[8px] cursor-pointer" onClick={handleClose}>
            <IoMdClose size={18} />
        </div>

        <DialogHeader className='pb-6 relative after:content-[""] after:absolute after:bottom-0 after:-left-6 after:w-[120%] after:h-[1px] after:bg-[#D8E0E6]'>
          <DialogTitle className="text-2xl font-bold">We Value Your Feedback!</DialogTitle>
          <DialogDescription className="text-gray-600">
            Your thoughts help us improve! Please share your feedback, suggestions, or concerns so we can enhance your experience.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-base font-medium flex">
              Your Name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded w-full py-2 px-4"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-base font-medium flex">
              Feedback Message <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write Message..."
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              required
              className="min-h-32 border border-gray-300 rounded w-full py-2 px-4"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 flexCenter gap-2 rounded-[8px]"
            >
              Send <FaArrowRight/>
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}