"use client";

import Layout from "@/components/layout/Layout";
import ClientReview from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/ClientReview";
import FeaturesSection from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/FeaturesSection";
import MoneyTimeSection from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/MoneyTimeSection";
import PaymentGateway from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/PaymentGateway";
import ProcessPurchase from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/ProcessPurchase";
import ResponsiveUISlider from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/ResponsiveUISlider";
import SliderSection from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/SliderSection";
import SuccessStatics from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/SuccessStatics";
import WhyChooseUs from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/WhyChooseUs";
import PerfectPlan from "@/components/pagesComponent/productDetailsPage/newUIProductDetailpageLayoutOne/PerfectPlan";
export default function Page() {
  return (
    <Layout>
      {/* slider section */}
      <SliderSection />
      {/* product details section */}
      <WhyChooseUs />
      <PaymentGateway />
      <SuccessStatics />

      <FeaturesSection />
      <MoneyTimeSection />
      <ResponsiveUISlider />
      <ProcessPurchase />
      <ClientReview />
      <PerfectPlan />
    </Layout>
  );
}
