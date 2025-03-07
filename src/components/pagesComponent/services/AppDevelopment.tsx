'use client'
import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'
import mainImg from '../../../assets/images/services/app-development/AppDevlopment.webp'

// swiper Imgs 
import android from '../../../assets/images/services/app-development/andriod Devlopment Service.webp'
import flutter from '../../../assets/images/services/app-development/flutter Devlopment Service.webp'
import ios from '../../../assets/images/services/app-development/iOS- Devlopment Service.webp'
import completeSolution from '../../../assets/images/services/app-development/Complete Solution Service.webp'

import timelyUpdadtes from '../../../assets/images/services/icons/Benefits/Timely Updates-.png'
import quality from '../../../assets/images/services/icons/Benefits/Testing & Quality Assurance.png'
import support from '../../../assets/images/services/icons/Benefits/Ongoing Support.png'
import eliteAuthor from '../../../assets/images/services/icons/Benefits/Elite Author on Codecanyon – 1.png'
import { servicesBenefitsDataTypes, servicesBuildDataTypes } from '@/types'

import ProcessSect from './ProcessSect'
import processImg from '../../../assets/images/services/app-development/10-10-05-Our_Work Process.webp'
import processImg2 from '../../../assets/images/services/app-development/11-10-05-Our Work Process Devlopment.psd.webp'
import processIcon1 from '../../../assets/images/services/icons/Process/Development.png'
import processIcon2 from '../../../assets/images/services/icons/Process/Maintenance & Support.png'
import processIcon3 from '../../../assets/images/services/icons/Process/Design & Planning.png'
import processIcon4 from '../../../assets/images/services/icons/Process/Analysis of Demands.png'
import processIcon5 from '../../../assets/images/services/icons/Process/Testing & Quality Assurance.png'
import processIcon6 from '../../../assets/images/services/icons/Process/Deployment.png'
import arrowImg from '../../../assets/images/services/ArrowLeftDown.svg'

import buildBg from '../../../assets/images/contactFormBg.webp'
import androidIcon from '../../../assets/images/services/app-development/icon/Android.png'
import androidIconHover from '../../../assets/images/services/app-development/icon/Android_Hover – 1.png'
import flutterIcon from '../../../assets/images/services/app-development/icon/flutter.png'
import flutterIconHover from '../../../assets/images/services/app-development/icon/flutterHover.png'
import iosIcon from '../../../assets/images/services/app-development/icon/iOS.png'
import iosIconHover from '../../../assets/images/services/app-development/icon/iOSHover.png'
import ServicesSwiper from './ServicesSwiper'

const AppDevelopment: React.FC = () => {

  const newSwiperData = [
    {
      id: 0,
      title: 'Android app development',
      desc: `Our app development team has experience, knowledge, and expertise in Android mobile app development. We are committed to delivering unique interactive mobile applications that are perfectly tailored to our clients. Our Primary focus is on providing the best mobile application development service and making sure that our clients will have maximum satisfaction with our app development service.`,
      img: android,
      alt: 'top android mobile app development  service provider & experts'
    },
    {
      id: 1,
      title: 'iOS app development',
      desc: 'Due to the increase in the number of iOS device users, it become crucial to have a native iOS app & make it a huge market for iOS applications. Our app development team consists of iOS app development experts with experience of more than 6 years making us the best iOS app development service provider. We are committed to delivering unique interactive mobile applications that are perfectly tailored to our clients.',
      img: ios,
      alt: 'top IOS mobile app development  service provider & experts'
    },
    {
      id: 2,
      title: 'Flutter app development',
      desc: 'Flutter apps are continuously booming, it has revolutionized cross-platform app development that allows the creation of stunning and natively compiled applications for mobile, web, and desktop from a single codebase. Our app development team includes specialized experts for Flutter app development with 6+ years of experience making us a leading Flutter app development service provider.',
      img: flutter,
      alt: 'best fluter mobile app development service with WRTeam bhuj'
    },
    {
      id: 3,
      title: 'Customization',
      desc: `Not only app development we also offer customization in source codes by WRTeam making it tailored to your needs, & our mobile app development experts can also customize your existing application to make it personalized for your requirements and ensure a unique, user-friendly, & visually appealing online presence.`,
      img: completeSolution,
      alt: 'complete solution for all your digital problems with WRTeam bhuj'
    },
  ];


  const benefitsCardData = [
    {
      id: 0,
      icon: timelyUpdadtes,
      title: 'Timely Updates'

    },
    {
      id: 1,
      icon: quality,
      title: 'Testing & Quality Assurance'

    },
    {
      id: 2,
      icon: support,
      title: 'Ongoing Support'

    },
    {
      id: 3,
      icon: eliteAuthor,
      title: 'Elite Author on Codecanyon'

    },
  ];

  const processCardData = [
    {
      id: 0,
      icon: processIcon1,
      title: 'Analysis of Demands',
      desc: 'Our process of development starts with in-depth analyses of your business and requirements.'

    },
    {
      id: 1,
      icon: processIcon2,
      title: 'Design & Planning',
      desc: 'We design a futuristic mobile app with a user-friendly interface that fulfills all your requirements.'

    },
    {
      id: 2,
      icon: processIcon3,
      title: 'Development',
      desc: 'Our experts develop a stunning mobile app that aligns with all your requirements and provides timely updates on the projects.'

    },
    {
      id: 3,
      icon: processIcon4,
      title: 'Testing & Quality Assurance',
      desc: 'Once the app development is done, we ensure that it’s working seamlessly without any errors on all platforms. '

    },
    {
      id: 4,
      icon: processIcon5,
      title: 'Deployment',
      desc: 'Once the application is fully ready, we deploy it to the real environment that allows users to access it across the world.'

    },
    {
      id: 5,
      icon: processIcon6,
      title: 'Maintenance & Support',
      desc: 'We not only deploy the website but also ensure that your website remains up-to-date and fully operational. We believe in making long-term connections.'

    },
  ];

  const buildCardData = [
    {
      id: 0,
      icon: androidIcon,
      hoverIcon: androidIconHover,
      title: 'Android',
      alt: 'android app development service provider-WRTeam'

    },
    {
      id: 1,
      icon: flutterIcon,
      hoverIcon: flutterIconHover,
      title: 'Flutter',
      alt: 'bet flutter technology developers will work for you WRTeam bhuj'

    },
    {
      id: 2,
      icon: iosIcon,
      hoverIcon: iosIconHover,
      title: 'iOS',
      alt: 'ios app development service provider-WRTeam'
    },
  ];



  return (
    <Layout>
      <Breadcrumb title='App' blueText='Development' secondElement='Services' thirdElement='App Development' />
      <section className='container commonMT'>
        <div className="grid max-1199:grid-cols-1 grid-cols-2 gap-8">
          <div className='flexColCenter !items-start commonTextGap'>
            <span className='sectionTag'>App <span>Development</span></span>
            <h2 className='sectionTitle'>Make Mobile App With the Best <span>App Development</span> Company</h2>
            <p className='sectionPara'>Our app development service is available to meet your unique business needs and create high-quality, user-friendly mobile applications.</p>
          </div>

          <div className='flexCenter'>
            <div className='flexCenter relative before:contents-[""] before:absolute before:top-[6px] before:left-0 before:right-0 before:bottom-0 before:m-auto before:w-[86%] before:h-[96%] before:primaryBg before:-z-[1] before:rotate-[185deg] before:rounded-[16px]'>
              <Image src={mainImg} height={0} width={0} loading='lazy' alt='best android & ios app development company -WRTeam Bhuj- gujrat' className='w-[85%] h-auto' />
            </div>
          </div>
        </div>
      </section>

      {/* swiper  */}
      <section className='commonBg pt-8 pb-12 md:pt-16 md:pb-24 commonMT'>
        <div className="container space-y-10">
          <div className='flexColCenter commonTextGap'>
            <span className='sectionTag'><span>What</span> We Can Do <span>For You</span></span>
            <h3 className='sectionTitle'>Services <span>We Can Help </span>You With</h3>
          </div>
          <ServicesSwiper data={newSwiperData} />
        </div>
      </section>

      {/* benefits */}
      <section className='container commonMT space-y-12'>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='flexColCenter !items-start commonTextGap'>
            <span className='sectionTag'>Extensive <span>Benefits</span></span>
            <h4 className="sectionTitle">Unleashing the Potential of the Best Mobile <span>App Development</span> Service.</h4>
          </div>
          <div className='flexCenter'>
            <p className='sectionPara'>Discover unparalleled benefits with the best app development service provider. We are committed to delivering innovative & efficient apps to elevate your online success.</p>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            benefitsCardData.map((item: servicesBenefitsDataTypes) => {
              return <div className='flexColCenter !items-start gap-7 border-[2px] border-[#545A684D] rounded-[16px] p-5 group transition-all duration-300 hover:bg-white hover:shadow-[-16px_16px_46px_#2830421F] hover:border-transparent' key={item.id}>
                <div className='flexCenter primaryBg w-[60px] md:w-[74px] h-[56px] md:h-[74px] rounded-md shadow-[0px_8px_26px_#176BF15C]'>
                  <Image src={item.icon} height={0} width={0} loading='lazy' alt={item.title} className='w-[30px] md:w-[40px] h-auto' />
                </div>
                <p className='font-bold text-lg'>{item.title}</p>
              </div>
            })
          }

        </div>
      </section>

      {/* process  */}
      <section className='container commonMT space-y-16'>
        <ProcessSect data={processCardData.slice(0, 3)} isReverse={false} sectionTitle='How Does Our App Development Team Create an App For You?' blueText='App Development' sectionImg={processImg} alt='every work is done in systematic way at best it company WRTeam bhuj' />
        <div className='container max-1199:hidden'>
          <Image src={arrowImg} height={0} width={0} loading='lazy' alt='arrowDown' className='w-[58%] 2xl:w-[62%] -mt-[40px] -mb-[40px] 2xl:-mb-[80px] mx-[-18px] 2xl:mx-[-60px] h-auto' />
        </div>
        <ProcessSect data={processCardData.slice(3, processCardData.length)} isReverse={true} sectionTitle='' blueText='' sectionImg={processImg2} alt='work in progress with the best web-app development company WRTeam bhuj' />
      </section>

      {/* build  */}
      <section className='commonMT commonMB'>
        <div className='h-[400px] relative -z-[1]' style={{ background: `rgb(2 0 16 / 61%) url(${buildBg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'darken' }}>
          <div className="primaryBg relative z-[2] h-full w-full opacity-[0.5]"></div>
        </div>
        <div className="container max-1199:-mt-[350px] -mt-[250px]">
          <div className="bg-white shadow-[0px_0px_46px_#2830421F] relative z-[2] py-4 md:py-8 lg:py-12 rounded-[16px] overflow-hidden">
            <div className="grid grid-cols-12 gap-y-4">
              <div className="max-1199:col-span-12 col-span-5 flexColCenter !items-start commonTextGap border-r p-4 md:p-12">
                <span className='sectionTag'><span>We</span> Build</span>
                <h6 className='sectionTitle'>App <span>Development</span> Services Tailored for <span>Latest Platforms</span></h6>
                <p className='sectionPara'>Our app development mastery is across iOS, and Android and is compatible with cross platforms. Tailored solutions, universal impact.</p>
              </div>
              <div className="max-1199:col-span-12 col-span-7 !p-[0px_25px] md:max-1199:!p-[0px_65px] lg:!p-[85px]">
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-12'>
                  {
                    buildCardData.map((item: servicesBuildDataTypes) => {
                      return <div className="flexColCenter gap-4 group transition-all duration-300" key={item.id}>
                        <div className='commonBg rounded-md h-[90px] w-[90px] flexCenter group-hover:primaryBg transition-all duration-300'>
                          <Image src={item.icon} height={0} width={0} loading='lazy' alt={item.alt} className='w-[55px] h-auto group-hover:hidden block transition-all duration-300' />
                          <Image src={item.hoverIcon} height={0} width={0} loading='lazy' alt={item.alt} className='w-[55px] h-auto group-hover:block hidden transition-all duration-300' />
                        </div>
                        <span className='font-semibold md:text-lg'>{item.title}</span>
                      </div>
                    })
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AppDevelopment