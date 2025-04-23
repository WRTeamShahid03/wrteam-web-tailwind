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
      <div className="p-4 md:p-8 rounded-lg productDetailPrimaryBg flex flex-col lg:flex-row gap-y-3">
        {/* Payment Options */}
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <div className="flex gap-2 sm:gap-4 justify-center md:justify-start">
            {/* Stripe Payment Option */}
            {gateways.map((gateway, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div className="bg-white rounded-[8px] lg:rounded-full p-4 w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] flex items-center justify-center shadow-sm border-[7px] border-[#0383fe17]">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-1">
                      <Image src={gateway.image_url} alt={gateway.name} width={40} height={40} className="w-[24px] sm:w-[40px] h-[24px] sm:h-[40px]"/>
                    </div>
                    <span className="text-[10px] sm:text-sm text-gray-700 text-center font-bold">{gateway.name}</span>
                  </div>
                </div>
              </div>
            ))}

            
          </div>
        </div>

        {/* Mobile Device Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <div className="relative">
            <Image
              src={image_url || ""}
              alt={title}
              width={500}
              height={512}
              className="max-575:w-[337px] w-[400px] lg:w-[500px] max-575:h-[337px] h-[400px] lg:h-[512px] rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
