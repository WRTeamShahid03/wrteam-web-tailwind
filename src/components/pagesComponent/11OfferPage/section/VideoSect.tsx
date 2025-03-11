'use client'
import React, { useEffect } from 'react'
import CommonBtnComp from '../../freeSourceCode/CommonBtnComp';

const VideoSect = () => {

    useEffect(() => {
        // Load Wistia scripts after the component mounts
        const wistiaScript1 = document.createElement('script');
        wistiaScript1.src = "https://fast.wistia.com/embed/medias/533csm8h2x.jsonp";
        wistiaScript1.async = true;
        document.body.appendChild(wistiaScript1);

        const wistiaScript2 = document.createElement('script');
        wistiaScript2.src = "https://fast.wistia.com/assets/external/E-v1.js";
        wistiaScript2.async = true;
        document.body.appendChild(wistiaScript2);

        // Cleanup function to remove the scripts if the component unmounts
        return () => {
            document.body.removeChild(wistiaScript1);
            document.body.removeChild(wistiaScript2);
        };
    }, []);

    return (
        <section className='container commonMT videoSect'>
            <div className="flexColCenter commonTextGap lg:w-[74%] text-center m-auto">
                <h1 className='text-2xl md:text-4xl lg:text-5xl/[55px] font-[500] [&_span]:primaryColor'>Fed Up with Coding from Scratch? Get 11 Ready-to-Use <span>Source Codes for Just $699!</span></h1>
                <p className='text-sm sm:text-base md:text-lg'>Why start from zero? Use these ready-made Source codes and speed up your work instantly.</p>

                <div className='videoPlayer w-100'>
                    {/* Wistia video embed */}
                    <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <div className="wistia_responsive_wrapper" style={{ height: '100%', position: 'absolute', top: 0, left: 0, width: '100%' }}>
                            <div className="wistia_embed wistia_async_533csm8h2x seo=true videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>

                <CommonBtnComp />

            </div>
        </section>
    )
}

export default VideoSect
