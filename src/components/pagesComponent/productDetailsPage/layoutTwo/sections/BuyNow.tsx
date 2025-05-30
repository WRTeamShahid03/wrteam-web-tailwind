"use clients";
import React, { useEffect, useState } from "react";
import bgLines from "../../../../../assets/images/productDetailPage/layoutTwo/bgLines.svg";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useParams } from "next/navigation";

interface dataProps {
  checkoutUrl: string;
}

const BuyNow: React.FC<dataProps> = ({ checkoutUrl }) => {
  const [productName, setProductName] = useState<string>("");

  const router = useParams();

  const slug = router?.slug;
  useEffect(() => {
    if (slug && typeof slug === "string") {
      if (slug.startsWith("ebroker")) {
        setProductName("eBroker");
      } else if (slug.startsWith("eclassify")) {
        setProductName("eClassify");
      }
    } else if (slug && typeof slug === "string" && slug.startsWith("erestro")) {
      setProductName("eRestroSingle");
    } else {
      setProductName("eSchool");
    }
  }, [slug]);

  return (
    <section className="container commonMT">
      <div
        className='grid grid-cols-12 gap-y-8 lg:gap-0 p-4 sm:p-6 md:p-8 lg:p-12 rounded-[8px] overflow-hidden relative affter:content-[""] after:absolute after:h-full after:w-full after:productSecondaryBg after:top-0 after:left-0 after:-z-[1] after:opacity-90'
        style={{
          background: `url(${bgLines.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-span-12 lg:col-span-8 xl:w-[80%]">
          <h3 className="sectionTitle text-white">{`Supercharge Your Project with ${productName} Today`}</h3>
        </div>
        <div className="col-span-12 lg:col-span-4 flexCenter lg:!justify-end">
          <Link
            href={checkoutUrl}
            target="_blank"
            title="Buy Now"
            className="productCommonBtn text-center  flexCenter gap-1 !text-xl !w-max !p-5"
          >
            <span>Buy Now</span>
            <BiRightArrowAlt size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
