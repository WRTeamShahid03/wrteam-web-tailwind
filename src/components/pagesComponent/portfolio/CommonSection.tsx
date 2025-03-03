import Image from 'next/image'
import React from 'react'
import playStore from '../../../assets/images/portfolio/playstore.svg'
import iosStore from '../../../assets/images/portfolio/iOS-Store.svg'
import web from '../../../assets/images/portfolio/web.svg'

const CommonSection = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className='flexColCenter !items-start commonTextGap'>
            <span className='sectionTag'>Yakili</span>
            <h1 className='sectionTitle'>Online Learning with Innovative School Management App</h1>
            <p>Say goodbye to manual paperwork and administrative hassles, and embrace the future of education management with Yakili. An innovative school management app revolutionizing online learning! Developed using Flutter technology, which is compatible with both platform Android and iOS, managing student enrollment, attendance, scheduling, and resources is effortless. With Yakili, we've fulfilled client needs, ensuring seamless performance and user satisfaction.</p>
            <div className='flex items-center gap-4'>
                <div className='secondaryBg text-white'>
                    <div><Image src={playStore} height={0} width={0} alt='playstore' className='w-full h-full'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommonSection