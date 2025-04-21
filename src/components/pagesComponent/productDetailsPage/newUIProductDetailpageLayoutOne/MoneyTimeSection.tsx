"use client";
import Image from "next/image";
import React from "react";
import saveMoneyImg from "../../../../assets/images/productDetailPage/layoutOne/saveMoneyImg.png"
import leftShape from '../../../../assets/images/productDetailPage/layoutTwo/leftShape.png'
import rightShape from '../../../../assets/images/productDetailPage/layoutTwo/rightShape.png'

interface listData {
  id: number,
  list: string
}

const MoneyTimeSection: React.FC = () => {

  const list = [
    {
      id: 1,
      list: 'One Time Payment',
    },
    {
      id: 2,
      list: 'Ready To Launch',
    },
    {
      id: 3,
      list: 'Lifetime Revenue',
    },
    {
      id: 4,
      list: 'Error Free Code',
    },
  ];

  const productName = 'productName'

  return (
    <div className="container commonMT">
      <div className="productSecondaryBg w-full py-6 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 rounded-3xl relative overflow-hidden my-12">
        {/* Content container */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
            <div className="flexColCenter commonTextGap mb-6 md:mb-12">
              <h2 className="sectionTitle !font-bold">
                {`Save Money & Time With ${productName}`}
              </h2>

              {/* Show the first part of short_description (before bullet points) */}
              <p className="sectionPara !text-gray-100">
                `${productName} saves your very precious time and your hard-earned money`
              </p>

            </div>

            {/* Feature points */}
            <div className="space-y-6 md:space-y-12">
              {list.map((point: listData) => (
                <div key={point.id} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1d3a5d] font-bold text-sm">
                    {point.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{point.list}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative rounded-lg flex items-center justify-center">
              <Image
                src={saveMoneyImg.src}
                alt="Money & Time Savings Illustration"
                width={0}
                height={0}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className='hidden lg:block'>
          <div className="absolute top-0 left-0">
            <Image src={leftShape} alt='leftShape' height={0} width={0} className='w-full h-full' />
          </div>
          <div className="absolute -bottom-[30px] right-0">
            <Image src={rightShape} alt='rightShape' height={0} width={0} className='w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  );
}


export default MoneyTimeSection;