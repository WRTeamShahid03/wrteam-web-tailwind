import React from 'react'
import Image from 'next/image'
import envatoIcon from '../../../../assets/images/envatoTestimonial.png'
import { LiaStarSolid } from 'react-icons/lia'
import { BsStarHalf } from 'react-icons/bs'
import CommonBtnComp from '../CommonBtnComp'
import { freeSourceCodeTestimonialsDataType } from '@/types'

const Testimonials = () => {

    const data = [
        {
            id: 0,
            name: 'afrojuju',
            reviewFor: 'For Code Quality',
            rating: '5',
            desc: `I will take a moment to say this are one of the best developers on Codecanyon in my 8yrs using this platform. I am short of words but let me outline a few feedbacks: Quality of support 100%,Design & UI 100%,No Bugs 100%,First time build with no errors 100%,I can go on and just a great team to work withe and these are not even close until you see it for yourself.Great team and keep the great work. I remain a loyal customer.
`
        },
        {
            id: 1,
            name: 'Rpython',
            reviewFor: 'For Design Quality',
            rating: '5',
            desc: `I am very happy to have purchased their script.The support team is mobilized to respond to you whatever the problem and whatever time you request them.A special mention for the quality of design and the completeness of the script's features. It's amazing !.I have no doubt they will continue to improve the script with other features to make it even more complete.Bravo for your professionalism WRTeam.`
        },
        {
            id: 2,
            name: 'Dafrii',
            reviewFor: 'For Code Quality',
            rating: '5',
            desc: `Working with WRTeam has been a game-changer for my business! I needed a cross-platform app that could seamlessly operate on both iOS and Android, and bugs free, and I got it from these guys. Their ready-to-use property solution not only addresses our needs but is also incredibly customizable, allowing us to tweak everything to fit our unique requirements. The code is clean and maintainable, which is a big plus for our internal team. We're impressively pleased with the modern UI design that engages our users. Highly recommend WRteam.`
        },
        {
            id: 3,
            name: 'afrimillzmail',
            reviewFor: 'For Customer Support',
            rating: '5',
            desc: `They never get tired of my messages, and that's why I recommend them. You don't need to be a programmer to use their software. Just follow their guide, and they will be right beside you.`
        },
        {
            id: 4,
            name: 'Manishkm88',
            reviewFor: 'For Customer Support',
            rating: '5',
            desc: 'I am very happy with the work of this company because they reply very quickly when you have any work and listen to you well and give you good replies. The code is very good and the website works very well. I am very happy to use this theme...love wrteam'
        },
        {
            id: 5,
            name: 'Drapoel',
            reviewFor: 'For Customer Support',
            rating: '5',
            desc: `You're truly amazing! Despite the many questions I ask and the numerous issues I encounter, you consistently try to help me. Although responses can sometimes be delayed, which I assume is due to the time zone difference, this team is genuinely professional and skilled. No matter the challenges, they always assist me in solving any problem I face.`
        },
    ];

    const renderStars = (rating: number) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<LiaStarSolid key={i} size={20} color='#FFC66B' />);
            } else if (hasHalfStar && i === fullStars) {
                stars.push(<BsStarHalf key='half' size={18} color='#FFC66B' />);
            } else {
                stars.push(<LiaStarSolid key={i} size={20} color='#bfc3c7' />);
            }
        }

        return stars;
    };

    return (
        <section className='container commonMT space-y-8 md:space-y-12 lg:space-y-16'>
            <div className="flexCenter">
                <h3 className='text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto text-center lg:text-start'>See What Others Are Saying About This Code</h3>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map((item: freeSourceCodeTestimonialsDataType) => {
                        return <div className='flexColCenter !items-start !justify-start gap-8 bg-[#316be71a] border-[#545a6882] rounded-[14px] p-5' key={item.id}>
                            <div className='flexCenter flex-wrap gap-4  !justify-between w-full'>
                                <div className='flexCenter gap-3'>
                                    <div>
                                        <Image src={envatoIcon} height={0} width={0} alt='envato-icon' className='w-[50px] h-auto' />
                                    </div>
                                    <div className='flexColCenter !items-start gap-2'>
                                        <span>{item.name}</span>
                                        <span className='text-[#808080]'>{item.reviewFor}</span>
                                    </div>
                                </div>
                                <div className='flexCenter gap-2'>
                                    {renderStars(Number(item.rating))}
                                </div>
                            </div>
                            <p className=''>{item.desc}</p>
                        </div>
                    })
                }

            </div>
            <div>
                <CommonBtnComp />
            </div>
        </section>
    )
}

export default Testimonials
