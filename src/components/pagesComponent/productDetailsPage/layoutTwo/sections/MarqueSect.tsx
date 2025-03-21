'use client'
import React, { useEffect, useState } from 'react'
import img from '../../../../../assets/images/envatoTestimonial.png'

import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { usePathname } from 'next/navigation';
import { marqueTestimonialDataType } from '@/types';

const MarqueSect = () => {

    const slug = usePathname();

    const [data, setData] = useState<marqueTestimonialDataType[]>([]);

    const eClassify = [
        {
            id: 0,
            title: 'The support us in everything',
            name: 'likeshock',
        },
        {
            id: 1,
            title: 'The application is very fast and high quality',
            name: 'Phepuq',
        },
        {
            id: 2,
            title: 'The design of the application is excellent.',
            name: 'oiuh',
        },
        {
            id: 3,
            title: `It's beautifully designed`,
            name: 'arif',
        },
        {
            id: 4,
            title: `I don't know how I can thank you? Excellent`,
            name: 'alinsour',
        },
        {
            id: 5,
            title: 'Very nice, respectful and accurate work',
            name: 'hassaan',
        },
        {
            id: 6,
            title: 'Thank you for the awesome product.',
            name: 'idtechliveprojects',
        },
    ];

    const eRestroSingle = [
        {
            id: 0,
            title: 'Thank you guys for fast Support',
            name: 'camdere',
        },
        {
            id: 1,
            title: 'I want to extend my heartfelt thanks',
            name: 'ashishmasih',
        },
        {
            id: 2,
            title: 'Their Customer Support is Awesome',
            name: 'taxonimein',
        },
        {
            id: 3,
            title: 'I really appreciate WRTEAM support',
            name: 'raoksam',
        },
        {
            id: 4,
            title: 'Best quality code',
            name: 'LexLuter',
        },
        {
            id: 5,
            title: `I can't emphasize enough how impressed I am`,
            name: 'pra1ay',
        },
        {
            id: 6,
            title: 'Very professional team work!',
            name: 'rasheed',
        },
    ];

    const eBroker = [
        {
            id: 0,
            title: 'I found the customer service very respectful',
            name: 'nadr',
        },
        {
            id: 1,
            title: 'Providing effective feedback on code quality',
            name: 'samvinn',
        },
        {
            id: 2,
            title: 'This is the only team in Envato!',
            name: 'octadot',
        },
        {
            id: 3,
            title: 'Working with WRTeam has been a game changer',
            name: 'dafrii',
        },
        {
            id: 4,
            title: 'WRTeam es excelente sin duda los',
            name: 'nutaxelraya',
        },
        {
            id: 5,
            title: 'Nice code quality and superb support team',
            name: 'cosmosdigitech',
        },
        {
            id: 6,
            title: 'Exceptional quality and professionalism',
            name: 'awwsalah',
        },
    ];

    const eSchoolRegular = [
        {
            id: 0,
            title: `Im really happy with the support`,
            name: 'argroofficial',
        },
        {
            id: 1,
            title: 'Very good project, best of luck',
            name: 'simoxbeletc',
        },
        {
            id: 2,
            title: 'Great builds and professional',
            name: 'afrojuju',
        },
        {
            id: 3,
            title: 'eSchool is simply exceptional',
            name: 'xirz_co',
        },
        {
            id: 4,
            title: 'Their service exceeded my expectations',
            name: 'rilakely',
        },
        {
            id: 5,
            title: 'I really appreciate WRTeam',
            name: 'ali_alwaly',
        },
        {
            id: 6,
            title: 'That Was Awesome',
            name: 'misterj',
        },
    ];

    useEffect(() => {
        if (slug.startsWith('ebroker')) {
            setData(eBroker)
        }
        else if (slug.startsWith('eclassify')) {
            setData(eClassify)
        }
        else if (slug.startsWith('erestro')) {
            setData(eRestroSingle)
        }
        else {
            setData(eSchoolRegular)
        }
    }, [slug])



    return (
        <>
            <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
            >
                <div className='flexCenter gap-6 py-6'>
                    {
                        data?.map((data, index) => {
                            return (
                                <div key={data.id} className='flexCenter gap-4 shadow-[0_2px_4px_0_#0000001f] p-3 rounded-[8px]'>
                                    <Image src={img} height={0} width={0} alt='cardImg' className='w-[36px] h-[40px]' />
                                    <div className='flex flex-col gap-1'>
                                        <span className='title font-semibold'>{data.title}</span>
                                        <span className='desc'>{data.name}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Marquee>
        </>
    )
}

export default MarqueSect
