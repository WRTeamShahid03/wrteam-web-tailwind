import React from 'react';
import Image from 'next/image';

const PaymentGatewaysTwo = ({ title, description, gateways }: { title: string, description: string, gateways: any[] }) => {

    return (
        <div className="container">
            <section className="relative bg-[#e8f4f4] py-8 md:py-12 lg:py-16 overflow-hidden rounded-lg my-10">
                {/* Top Left Corner */}
                <div className="absolute top-0 left-0 w-[125px] h-[125px] lg:productPrimaryBg  rounded-br-full z-10"></div>

                {/* Bottom Right Corner */}
                <div className="absolute bottom-0 right-0 w-[125px] h-[125px] lg:productPrimaryBg  rounded-tl-full z-10"></div>

                <div className="relative z-20 flex flex-col lg:flex-row md:items-center justify-center max-w-6xl mx-auto">
                    {/* Text Content */}
                    <div className="text-center lg:w-2/5 mb-10 lg:mb-0 flex flex-col items-center">
                        <h2 className="sectionTitle secondaryColor font-bold mb-4">
                            {title}
                        </h2>
                        <p className="sectionPara" dangerouslySetInnerHTML={{ __html: description || '' }} />
                    </div>

                    {/* Payment Gateways Grid */}
                    <div className="flexCenter max-575:gap-[10px] gap-[50px] lg:w-1/2">
                        <div className="card bg-white rounded-[8px] w-[108px] h-[120px] max-575:w-[76px] max-575:h-[98px] flex flex-col items-center justify-center shadow-md hover:-translate-y-1 transition-transform duration-300" key={gateways[0]?.name}>
                            <div className=''>
                                <Image src={gateways[0]?.image_url} alt="gatewayIcon" width={44} height={44} className='max-575:!w-[30px] max-575:!h-[30px]' />
                            </div>
                            <div className=''>
                                <span className='text-sm sm:text-base'>{gateways[0]?.name}</span>
                            </div>
                        </div>
                        <div className='flex flex-col max-575:gap-[10px] gap-[50px]'>
                            <div className="card bg-white rounded-[8px] w-[108px] h-[120px] max-575:w-[76px] max-575:h-[98px] flex flex-col items-center justify-center shadow-md hover:-translate-y-1 transition-transform duration-300" key={gateways[1]?.name}>
                                <div className=''>
                                    <Image src={gateways[1]?.image_url} alt="gatewayIcon" width={44} height={44} className='max-575:!w-[30px] max-575:!h-[30px]' />
                                </div>
                                <div className=''>
                                    <span className='text-sm sm:text-base'>{gateways[1]?.name}</span>
                                </div>
                            </div>
                            <div className="card bg-white rounded-[8px] w-[108px] h-[120px] max-575:w-[76px] max-575:h-[98px] flex flex-col items-center justify-center shadow-md hover:-translate-y-1 transition-transform duration-300" key={gateways[2]?.name}>
                                <div className=''>
                                    <Image src={gateways[2]?.image_url} alt="gatewayIcon" width={44} height={44} className='max-575:!w-[30px] max-575:!h-[30px]' />
                                </div>
                                <div className=''>
                                    <span className='text-sm sm:text-base'>{gateways[2]?.name}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-white rounded-[8px] w-[108px] h-[120px] max-575:w-[76px] max-575:h-[98px] flex flex-col items-center justify-center shadow-md hover:-translate-y-1 transition-transform duration-300" key={gateways[3]?.name}>
                            <div className=''>
                                <Image src={gateways[3]?.image_url} alt="gatewayIcon" width={44} height={44} className='max-575:!w-[30px] max-575:!h-[30px]' />
                            </div>
                            <div className=''>
                                <span className='text-sm sm:text-base'>{gateways[3]?.name}</span>
                            </div>
                        </div>
                        {/* {gateways.map((gateway) => (
                        <div
                            key={gateway.name}
                            className="bg-white rounded-xl p-5 flex flex-col items-center justify-center shadow-md hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="w-[70px] h-[50px] flex items-center justify-center mb-3">
                                <Image
                                    src={gateway.image_url}
                                    alt={`${gateway.name} payment gateway`}
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-base font-medium text-[#2c3e50] m-0">
                                {gateway.name}
                            </p>
                        </div>
                    ))} */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentGatewaysTwo;
