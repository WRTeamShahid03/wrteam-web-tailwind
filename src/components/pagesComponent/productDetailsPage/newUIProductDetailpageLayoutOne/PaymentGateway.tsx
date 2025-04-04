import { PaymentGatewaySection } from "@/types";
import Image from "next/image";

export default function PaymentGateway({ title, description, image_url, gateways }: PaymentGatewaySection) {
  
  return (
    <div className="container commonMT">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          {title}
        </h2>
        <div className="text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      {/* Main Content Section */}
      <div className="p-8 rounded-lg productDetailPrimaryBg overflow-hidden flex flex-col md:flex-row">
        {/* Payment Options */}
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Stripe Payment Option */}
            {gateways.map((gateway, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center shadow-sm">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-1">
                      <Image src={gateway.image_url} alt={gateway.name} width={40} height={40} className="min-w-[40px] min-h-[40px]"/>
                    </div>
                    <span className="font-medium text-sm text-gray-700">{gateway.name}</span>
                  </div>
                </div>
              </div>
            ))}

            
          </div>
        </div>

        {/* Mobile Device Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <div className="relative w-64">
            <img
              src={image_url}
              alt={title}
              className="w-full h-auto rounded-3xl"
              style={{
                filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
