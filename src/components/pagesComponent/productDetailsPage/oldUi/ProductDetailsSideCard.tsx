import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import { LiaStarSolid } from 'react-icons/lia';
import { BsStarHalf } from 'react-icons/bs';
import { OldUiProductData } from '@/types';

interface ProductDetailPageProps {
  data: OldUiProductData;
}

const ProductDetailsSideCard: React.FC<ProductDetailPageProps> = ({ data }) => {
  // console.log(checkoutLink, "slugData in detailPage")
  // console.log(data, "dataaaa")

  // console.log(salePrice, 'saleee')
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < fullStars) {
        stars.push(<LiaStarSolid key={i} size={18} color='#FFA800' />);
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<BsStarHalf key='half' size={15} color='#FFA800' />);
      } else {
        stars.push(<LiaStarSolid key={i} size={18} color='gray' />);
      }
    }

    return stars;
  };

  const isSale = true

  return (
    <div>
      <div className={`w-max max-1199:relative fixed max-1199:top-0 ${isSale ? 'top-[220px]' : 'top-[194px]'} mb-8 bg-[#0d6efd0d] p-6 rounded-2xl gap-5 border border-[#0000002d] overflow-hidden max-1199:m-auto`}>
        <div>
          {/* Upper Section */}
          <div className="w-max flex flex-col items-start gap-[18px] border-b border-gray-300 pb-6">
            <div className="flex items-center justify-center gap-5">
              <span className="text-gray-800 font-semibold text-xl md:text-2xl lg:text-3xl">Price :</span>
              {data?.sale_price === undefined || data?.sale_price === null ? (
                <span className="primaryColor text-lg md:text-xl lg:text-2xl font-[800]">
                  ${data?.price}
                </span>
              ) : (
                <span className="primaryColor text-2xl md:text-3xl lg:text-3xl font-[800]">
                  <span className="line-through text-[#22A869] text-xl md:text-[24px] mr-1">
                    ${data?.price}
                  </span>
                  <span>${data?.sale_price ?? data?.sale_price}</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-5">
              <Link
                href={data?.checkout_url || '/'}
                target="_blank"
                title="Buy Product"
              >
                <button className="bg-[#22A869] text-white text-[18px] rounded-full px-[30px] py-[10px] flex items-center gap-2">
                  <FaCartShopping />
                  Buy Product
                </button>
              </Link>
            </div>
          </div>

          {/* Middle Section */}
          <div className="w-max border-b border-gray-300 py-6">
            <span className="text-[18px] font-medium">
              <span className="font-bold">{data?.sales}</span> Sales
            </span>

            <div className="mt-3 flex flex-col items-start gap-3">
              <div className="flex">
                <span className="text-gray-500 text-[16px] font-medium">Files :</span>
                <span className="textSecondary ml-3 text-[14px]">
                  {data?.subcategory?.name}
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-gray-500 text-[16px] font-medium">Rating :</span>
                <span className="textSecondary ml-3 text-[14px] font-medium">
                  {data?.rating}
                </span>
                <span className="relative top-[-2px] left-2 flex">{renderStars(data?.rating)}</span>
              </div>

              <div className="flex">
                <span className="text-gray-500 text-[16px] font-medium">Category :</span>
                <span className="textSecondary ml-3 text-[14px]">
                  {data?.category?.name}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-max flex flex-col items-start gap-[18px] pt-6">
            <span className="textSecondary text-[20px] font-semibold">
              Want Customization ?
            </span>

            <Link href="/hire-us" title="hire us">
              <button className="primaryBg text-white text-[18px] rounded-full px-[50px] py-[8px]">
                Hire Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetailsSideCard