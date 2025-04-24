import React from "react";
import { PaymentGatewaySection } from "@/types";
import Image from "next/image";
import PaymentGatewaysTwo from "./PaymentGatewaysTwo";

const OrbitPaymentGateways: React.FC<PaymentGatewaySection> = ({ title, description, gateways,payment_gateway_main_image_url  }) => {

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

    gateways.length < 5 ?
      <PaymentGatewaysTwo title={title} description={description} gateways={gateways} />
      :
      <section className="container commonMT overflow-hidden py-4 md:py-12 lg:py-16">
        <div className="grid max-1199:grid-cols-1 max-1199:gap-y-16 grid-cols-2">
          <div className="flexColCenter commonTextGap text-center">
            <h5 className="sectionTitle">{title}</h5>
            <p className="sectionPara" dangerouslySetInnerHTML={{ __html: description || '' }} />
          </div>
          <div>
            <div className="flex justify-center items-center mb-8 -mt-10 py-3 lg:py-6">
              <div className='orbitPaymentsWrapper'>
                <div className="orbit-container">
                  <div className="center-img">
                    <img src={payment_gateway_main_image_url} alt="Center Image" />
                  </div>
                  <div className="orbit"></div>
                  <div className="orbit-inner"></div>
                  <div className="orbit-icon-container orbit-icon-container-outer">
                    {
                      gateways?.slice(0, 4).map((item, index) => {
                        return <div className={`orbit-icon icon${index + 1}`} key={index}><img src={item?.image_url} alt="gatewayIcon" /><span>{item?.name}</span></div>
                      })
                    }
                  </div>
                  <div className="orbit-icon-container-inner">
                    {
                      gateways?.slice(4, 8).map((item, index) => {
                        return <div className={`orbit-icon icon${index + 1}`} key={index}><img src={item?.image_url} alt="gatewayIcon" /><span>{item?.name}</span></div>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


  );
};

export default OrbitPaymentGateways;
