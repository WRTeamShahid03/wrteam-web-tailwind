import React from 'react'
import { FaCheck } from "react-icons/fa";
import CommonBtnComp from '../CommonBtnComp';
import Image from 'next/image';
import checkoutImg from '../../../../assets/images/freeSourceCode/checkoutSectImg.png'
import sourceCodeImg from '../../../../assets/images/11-offer-page/buildSectImg..svg'

interface listDataType {
  id: number,
  text: string,
}
interface dataProps {
  freeCodePage?: boolean
}

const CheckoutSect: React.FC<dataProps> = ({ freeCodePage }) => {

  const list1 = [
    {
      id: 0,
      text: 'True/False Quiz',
    },
    {
      id: 1,
      text: 'Quiz Battle',
    },
    {
      id: 2,
      text: 'Multiple Language Support',
    },
    {
      id: 3,
      text: 'Invite Friends',
    },
    {
      id: 4,
      text: 'Quiz Contest',
    },
    {
      id: 5,
      text: 'Contest Leaderboard',
    },
  ]

  const list2 = [
    {
      id: 0,
      text: 'Blowing Your Budget',
    },
    {
      id: 1,
      text: 'Wasting Hours on Basic Setup',
    },
    {
      id: 2,
      text: 'Debugging Common Issues',
    },
    {
      id: 3,
      text: 'Facing Compatibility Problems',
    },
    {
      id: 4,
      text: 'Dealing with Poor Documentation',
    },
  ]

  return (
    <section className="container commonMT">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className='order-2 lg:order-1 flexColCenter !items-start gap-12'>
          {
            freeCodePage ?
              <h2 className='text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto text-center lg:text-start'>Check Out What Makes This Quiz <span>Code Awesome</span></h2>
              :
              <h2 className='text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto text-center lg:text-start'>Start Building App/Website <span>Without…</span></h2>
          }
          <div className='flexColCenter !items-start gap-4'>
            {
              freeCodePage ?
                list1.map((list: listDataType) => {
                  return <div key={list.id} className='flexCenter !items-start gap-3'>
                    <span className='primaryColor'><FaCheck /></span>
                    <span>{list.text}</span>
                  </div>
                })
                :
                list2.map((list: listDataType) => {
                  return <div key={list.id} className='flexCenter !items-start gap-3'>
                    <span className='primaryColor'><FaCheck /></span>
                    <span>{list.text}</span>
                  </div>
                })
            }
          </div>
          {
            freeCodePage &&
            <CommonBtnComp />
          }
        </div>
        <div className='flexCenter order-1 lg:order-2'>
          <div className='flexCenter relative after:content-[""] after:absolute after:top-[28%] after:h-[40%] after:w-[120px] after:primaryBg after:blur-[80px] after:opacity-40
    before:content-[""] before:absolute before:top-[28%] before:h-[40%] before:w-[120px] before:primaryBg before:blur-[80px] before:opacity-40 before:left-[20%] after:right-[20%]'>
            <Image src={freeCodePage ? checkoutImg : sourceCodeImg} height={0} width={0} alt='section-img' className='w-auto h-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutSect
