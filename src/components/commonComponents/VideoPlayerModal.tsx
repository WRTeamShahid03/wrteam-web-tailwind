'use client'
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { FaPlay } from 'react-icons/fa6';
import ReactPlayer from 'react-player';

interface dataProps {
    initialOpen?: boolean;
    videoUrl: string
}

const VideoPlayerModal: React.FC<dataProps> = ({ initialOpen = false, videoUrl }) => {

    const [open, setOpen] = useState<boolean>(initialOpen);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    type="button"
                    aria-label="Play video"
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                    <FaPlay />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl overflow-hidden bg-black text-white border border-gray-500">
                <DialogHeader className=''>
                    <DialogTitle className="hidden"></DialogTitle>
                    <DialogDescription className="text-gray-500 mt-8 font-bold pt-6">
                        <div>
                            <ReactPlayer width='100%' height='500px' url={videoUrl} controls={true} />
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default VideoPlayerModal;