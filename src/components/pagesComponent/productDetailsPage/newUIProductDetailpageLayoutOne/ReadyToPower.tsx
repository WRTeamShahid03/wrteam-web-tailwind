'use client'

import Link from "next/link";


interface dataProps {
  checkoutUrl: string;
  productName: string;
}

const ReadyToPower:React.FC<dataProps> = ({ checkoutUrl,productName }) => {
  return (
    <div className="container commonMT">
      <div className="productDetailPrimaryBg overflow-hidden py-12 md:py-16 lg:py-20 md:p-8 my-4 rounded-lg">
        <div className="flexColCenter commonTextGap lg:w-[70%] xl:w-[50%] text-center m-auto mb-6 md:mb-12">
          <h6 className="sectionTitle !font-bold">
            {`Ready to Power Up Your Project with ${productName}?`}
          </h6>
          <p className="sectionPara">
            {`${productName} is designed to help you work smarter, not harder.
            Let&apos;s get you up and running in no time!`}
          </p>
        </div>
        <div className="flex justify-center gap-3 md:gap-4">
          <Link href={checkoutUrl} title="Buy Now" target="_blank" className="font-medium productPrimaryBg text-white px-4 md:px-6 py-2 rounded text-sm md:text-base">
            Buy Now
          </Link>
          <Link href={'/contact-us'} title="Contact Us" className="font-medium border productDetailPrimaryBorder productPrimaryColor px-4 md:px-6 py-2 rounded text-sm md:text-base">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReadyToPower;
