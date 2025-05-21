'use client'
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { IoClose } from 'react-icons/io5';

const GetOfferModal = () => {

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <Dialog open={show} onOpenChange={setShow}>
            <DialogTrigger asChild>
                <div className='flexColCenter gap-4 md:gap-4 cursor-pointer' onClick={() => setShow(true)}>
                    <div className='flexColCenter gap-1 primaryBg rounded-sm shadow-[0_4px_70px_0_#316be880] p-[14px] md:p-[12px_40px]'>
                        <span className='font-semibold text-base sm:text-lg md:text-2xl'>Get My Free Code Now!</span>

                        <span className='text-sm md:text-base'>(Star coding smarter, not harder)</span>
                    </div>
                    <span className=''>(20,000+ Happy Customers )</span>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl bg-transparent !border-transparent p-0 m-0 [&>.ring-offset-white]:hidden">
                <div className='relative border-none'>
                    <span className='cursor-pointer absolute top-[50px] right-[30px] text-white w-[30px] h-[30px] flexColCenter rounded-full bg-[#4c5b79]' onClick={handleClose}><IoClose /></span>
                    <iframe
                        width="100%"
                        height="700"
                        src="https://0c7023da.sibforms.com/serve/MUIFANUDnC0aTDyH5jIbVasxafIzKCAdnOPT3mkbU-DehPzRCPSUDMrbfxlOv_J8o6gA66SW6HH3NgP7s2s85G9kPN2mvHtGdzjuDUlq8lAmXvwdF5wrM2mfr7ODIVhw0joM-GJwbTXeHJykjXtcJuu3UfY4sLDuy_sFnTTDjkEyDJJpT1oooMxBYCFRBfKwmC5Zs4hRaYUufGF-"
                        frameBorder="0"
                        scrolling="auto"
                        allowFullScreen
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: '100%'
                        }}
                        className='max-575:h-[900px]'
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default GetOfferModal
