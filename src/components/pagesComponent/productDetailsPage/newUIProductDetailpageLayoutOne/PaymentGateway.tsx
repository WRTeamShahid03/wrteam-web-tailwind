import { PaymentGatewaySection } from "@/types";
import Image from "next/image";

export default function PaymentGateway({ title, description, image_url, gateways }: PaymentGatewaySection) {

  return (
    <div className="container commonMT">
      {/* Title Section */}
      <div className="flexColCenter !items-start commonTextGap text-center lg:w-[70%] xl:w-[58%] mb-8 mx-auto">
        <h6 className="sectionTitle !font-bold">
          {title}
        </h6>
        <div className="sectionPara !font-medium max-w-3xl" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      {/* Main Content Section */}
      <div className="p-4 md:p-8 rounded-[24px] productDetailPrimaryBg grid grid-cols-12 overflow-hidden max-575:gap-y-6 max-1199:gap-y-12">
        {/* Payment Options */}
        <div className="max-1199:col-span-12 col-span-8 flex-1 flex items-center max-1199:justify-center justify-start">
          <div className="flex gap-2 sm:gap-4 max-1199:justify-center justify-start flex-wrap">
            {/* Stripe Payment Option */}
            {gateways.map((gateway, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div className="bg-white rounded-[8px] lg:rounded-full p-4 w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] flex items-center justify-center shadow-sm border-[7px] border-[#0383fe17]">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-1">
                      <Image src={gateway.image_url} alt={gateway.name} width={40} height={40} className="w-[24px] sm:w-[40px] h-[24px] sm:h-[40px]" />
                    </div>
                    <span className="text-[10px] sm:text-sm text-gray-700 text-center font-bold">{gateway.name}</span>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>

        {/* Mobile Device Image */}
        <div className="max-1199:col-span-12 col-span-4 flex-1 flex max-1199:justify-center justify-end items-center mt-8 md:mt-0">
          <div className="relative">
            <Image
              src={image_url || ""}
              alt={title}
              width={500}
              height={512}
              sizes="(max-width: 575px) 337px, (max-width: 1024px) 400px, 500px"
              className="w-full max-w-[500px] aspect-[1/1.02] rounded-3xl object-cover"
              quality={75} // optional compression setting
            />

          </div>
        </div>
      </div>
    </div>
  );
}
