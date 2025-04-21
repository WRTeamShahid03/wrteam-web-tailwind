import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';

interface dataProps {
    initialOpen?: boolean;
    desc: string
}

const ReadMoreModal: React.FC<dataProps> = ({ initialOpen = false, desc }) => {

    const [open, setOpen] = useState<boolean>(initialOpen);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <span className='productPrimaryColor font-semibold -mt-1 text-sm cursor-pointer ml-1'>Read More</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md overflow-hidden">
                <DialogHeader className=''>
                    <DialogTitle className="pb-3 relative after:content-[''] after:absolute after:bottom-0 after:-left-6 after:w-[120%] after:h-[1px] after:bg-[#D8E0E6] font-bold">Short Description</DialogTitle>
                    <DialogDescription className="text-gray-500 mt-8 font-bold">
                        {desc}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ReadMoreModal;