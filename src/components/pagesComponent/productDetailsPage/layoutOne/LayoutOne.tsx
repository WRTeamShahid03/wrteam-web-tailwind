import WhyChooseUs from "../newUIProductDetailpageLayoutOne/WhyChooseUs"
import SliderSection from "../newUIProductDetailpageLayoutOne/SliderSection"
import HeroSection from "./sections/HeroSection"
import ProcessPurchase from "../newUIProductDetailpageLayoutOne/ProcessPurchase"
import MoneyTimeSection from "../newUIProductDetailpageLayoutOne/MoneyTimeSection"
import SuccessStatics from "../newUIProductDetailpageLayoutOne/SuccessStatics"
import FeaturesSection from "../newUIProductDetailpageLayoutOne/FeaturesSection"
import PaymentGateway from "../newUIProductDetailpageLayoutOne/PaymentGateway"
import FaqSection from "../newUIProductDetailpageLayoutOne/FaqSection"
import ClientReview from "../newUIProductDetailpageLayoutOne/ClientReview"
import PerfectPlan from "../newUIProductDetailpageLayoutOne/PerfectPlan"
import ResponsiveUISlider from "../newUIProductDetailpageLayoutOne/ResponsiveUISlider"
import HelpAndSupport from "../newUIProductDetailpageLayoutOne/HelpAndSupport"
import ReadyToPower from "../newUIProductDetailpageLayoutOne/ReadyToPower"
import { ProductDetails } from "@/types"


interface LayoutOneProps {
  productDetails: ProductDetails
}

const LayoutOne = ({ productDetails }: LayoutOneProps) => {
  const layoutOneDetails = productDetails.product_description[0]

  const introSection = layoutOneDetails?.intro_section
  const technologySection = layoutOneDetails?.technology_section
  const productElementSection = layoutOneDetails?.product_element_section
  const featureSection = layoutOneDetails?.feature_section
  return (
    <>
      <HeroSection 
        title={introSection?.title || ''}
        description={introSection?.description || ''}
        mainImage={introSection?.image_url || ''}
        otherImagesUrl={introSection?.other_images_url || []}
        technologySection={technologySection}
      />
      
      {/* Passing product element data to SliderSection */}
      <SliderSection 
        title={productElementSection?.title || ""}
        description={productElementSection?.description || ""}
        elements={productElementSection?.elements || []}
      />
      
      {/* Pass feature_section data to WhyChooseUs */}
      <WhyChooseUs 
        mainImage={featureSection?.main_image_url || ""}
        title={featureSection?.title || ""}
        description={featureSection?.description || ""}
        features={featureSection?.features || []}
      />
      
      <PaymentGateway />
      <SuccessStatics />
      <FeaturesSection />
      <MoneyTimeSection />
      <ResponsiveUISlider />
      <ProcessPurchase />
      <ClientReview />
      <PerfectPlan />
      <FaqSection />
      <HelpAndSupport />
      <ReadyToPower />
    </>
  )
}

export default LayoutOne