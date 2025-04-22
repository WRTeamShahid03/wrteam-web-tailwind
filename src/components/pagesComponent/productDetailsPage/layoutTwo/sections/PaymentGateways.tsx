import React from "react";
import { PaymentGatewaySection } from "@/types";
import Image from "next/image";

const OrbitPaymentGateways: React.FC<PaymentGatewaySection> = ({ title, description, gateways }) => {

  // Function to position outer icons
  const getOuterIconPosition = (index: number) => {
    const positions = [
      "top-[-40px] left-[50%]",
      "top-[50%] right-[-54px]",
      "bottom-[-54px] left-[50%]",
      "top-[50%] left-[-40px]",
    ];
    return positions[index] || "";
  };

  // Function to position inner icons
  const getInnerIconPosition = (index: number) => {
    const positions = [
      "top-[13%] left-0",
      "top-[12%] right-0",
      "bottom-[8%] left-0",
      "bottom-[6%] right-0",
    ];
    return positions[index] || "";
  };

  return (

    <section className="container commonMT overflow-hidden">
      <div className="grid max-1199:grid-cols-1 max-1199:gap-y-16 grid-cols-2">
        <div className="flexColCenter commonTextGap text-center">
          <h5 className="sectionTitle">{title}</h5>
          <p className="sectionPara" dangerouslySetInnerHTML={{ __html: description || '' }} />
        </div>
        <div>
          <div className="flex justify-center items-center mb-8 -mt-10">
            <div className="relative w-[400px] h-[400px]">
              {/* Center Image */}
              <div className="absolute top-[46%] left-[46%] w-[100px] h-[100px] rounded-full bg-white flex flex-col justify-center items-center border border-gray-300">
                <Image src={gateways[0].image_url} alt="Center" className="w-auto h-auto" height={0} width={0} />
              </div>

              {/* Outer Orbit */}
              <div className="absolute top-[46%] left-[46%] w-[400px] h-[400px] -mt-[150px] -ml-[150px] border-2 border-dotted border-gray-300 rounded-full"></div>

              {/* Inner Orbit */}
              <div className="absolute top-[52%] left-[52%] w-[250px] h-[250px] -mt-[100px] -ml-[100px] border-2 border-dotted border-gray-300 rounded-full"></div>

              {/* Outer Icons */}
              <div className="absolute top-[50%] left-[50%] w-[350px] h-[350px] -mt-[150px] -ml-[150px] animate-spin-slow">
                {gateways.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-[60px] h-[60px] rounded-full bg-white flex flex-col justify-center items-center border border-gray-300 animate-[orbitIcon-rotate_20s_linear_infinite] ${getOuterIconPosition(index)}`}
                  >
                    <Image src={item.image_url} alt="gatewayIcon" className="w-6 h-6" height={0} width={0} />
                    <span className="text-[8px] font-semibold text-center">{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Inner Icons */}
              <div className="absolute top-[50%] left-[50%] w-[250px] h-[250px] -mt-[100px] -ml-[100px] animate-spin-slow">
                {gateways.slice(4, 8).map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-[60px] h-[60px] rounded-full bg-white flex flex-col justify-center items-center border border-gray-300 animate-[orbitIcon-rotate_20s_linear_infinite] ${getInnerIconPosition(index)}`}
                  >
                    <Image src={item.image_url} alt="gatewayIcon" className="w-6 h-6" height={0} width={0} />
                    <span className="text-[8px] font-semibold text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default OrbitPaymentGateways;
