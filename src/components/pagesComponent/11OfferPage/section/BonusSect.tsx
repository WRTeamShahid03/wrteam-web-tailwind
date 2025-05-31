import React from 'react'
import img1 from '../../../../assets/images/sourceCodePage/bonus1.png'
import img2 from '../../../../assets/images/sourceCodePage/bonus2.png'
import img3 from '../../../../assets/images/sourceCodePage/bonus3.png'
import img4 from '../../../../assets/images/sourceCodePage/bonus4.png'
import img5 from '../../../../assets/images/sourceCodePage/bonus5.png'
import img6 from '../../../../assets/images/sourceCodePage/bonus6.png'
import Image from 'next/image'
import { offerPageBonusDataType } from '@/types'

const BonusSect = () => {

    const data = [
        {
            id: 0,
            img: img1,
            title: 'Bonus #1',
            text: 'Lifetime Free Updates',
            price: '999',
        },
        {
            id: 1,
            img: img2,
            title: 'Bonus #2',
            text: '30-Day Money Back Guarantee*',
            price: '300',
        },
        {
            id: 2,
            img: img3,
            title: 'Bonus #3',
            text: 'Complete & Detailed Documentation',
            price: '200',
        },
        {
            id: 3,
            img: img4,
            title: 'Bonus #4',
            text: '10% Discount On Installation Service',
            price: '400',
        },
        {
            id: 4,
            img: img5,
            title: 'Bonus #5',
            text: 'Prioritized Customer Support',
            price: '600',
        },
        {
            id: 4,
            img: img6,
            title: 'Bonus #6',
            text: 'Error Free  & Clean Code',
            price: '500',
        },
    ]


    return (
        <div className="container commonMT space-y-8 md:space-y-12 lg:space-y-16">
            <div className='flexCenter'>
                <h5 className='text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto text-center lg:text-start'>Free Bonuses Worth <span>$2999</span></h5>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((bonus: offerPageBonusDataType, index) => (
                    <div
                        key={index}
                        className="bg-[#316be71a] p-6 rounded-xl shadow-lg text-center border border-[#80808070]"
                    >
                        <h3 className="font-semibold text-lg md:text-3xl lg:text-4xl mb-4">{bonus.title}</h3>
                        <Image
                            src={bonus.img}
                            alt={bonus.title}
                            className="w-auto h-auw-auto mx-auto mb-4"
                        />
                        <p className="text-lg md:text-3xl lg:w-[90%] text-center mx-auto">{bonus.text}</p>
                        <div className="primaryBg text-white font-semibold py-2 px-4 rounded-lg mt-4 inline-block text-xl md:text-3xl">
                            <span className='!font-light'>Worth :</span> ${bonus.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BonusSect
