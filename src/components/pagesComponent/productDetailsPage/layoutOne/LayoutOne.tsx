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
  const productDescription = productDetails.product_description[0]
  const productTestimonial = productDetails.product_testimonials
  const layoutOneDetails = productDescription
  const introSection = layoutOneDetails?.intro_section
  const technologySection = layoutOneDetails?.technology_section
  const productElementSection = layoutOneDetails?.product_element_section
  const featureSection = layoutOneDetails?.feature_section
  const paymentGatewaySection = layoutOneDetails?.payment_gateway_section
  const panelWiseFeatureSection = layoutOneDetails?.panel_wise_feature_section
  const productHighlightSection = layoutOneDetails?.product_highlight_section
  const appWiseFeatureSection = layoutOneDetails?.app_wise_feature_section
  const helpSection = layoutOneDetails?.help_section

  const productTestimonials = productTestimonial || []
  const productFaqs = productDetails.product_faqs
  
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
        title={featureSection?.title || ""}
        description={featureSection?.description || ""}
        features={featureSection?.features || []}
      />

      {/* Payment Gateway Section with proper data */}
      <PaymentGateway 
        title={paymentGatewaySection?.title || ""}
        description={paymentGatewaySection?.description || ""}
        gateways={paymentGatewaySection?.gateways || []}
        image_url={paymentGatewaySection?.payment_gateway_main_image_url || ""}
      />
      
      <SuccessStatics />
      
      {/* FeaturesSection with panel-wise features */}
      <FeaturesSection panelFeatures={panelWiseFeatureSection} />
      
      <MoneyTimeSection productHighlightSection={productHighlightSection || []} />
      
      {/* Pass app-wise feature data to ResponsiveUISlider */}
      <ResponsiveUISlider appFeatures={appWiseFeatureSection} />
      
      <ProcessPurchase />
      
      {/* Pass testimonials data to ClientReview */}
      <ClientReview testimonials={productTestimonials} />
      
      <PerfectPlan />

      <FaqSection faqs={productFaqs} />

      <HelpAndSupport helpSection={helpSection} />

      <ReadyToPower />
    </>
  )
}

export default LayoutOne