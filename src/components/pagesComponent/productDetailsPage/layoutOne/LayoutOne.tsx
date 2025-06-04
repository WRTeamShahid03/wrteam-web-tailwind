import WhyChooseUs from "../newUIProductDetailpageLayoutOne/WhyChooseUs";
import SliderSection from "../newUIProductDetailpageLayoutOne/SliderSection";
import HeroSection from "./sections/HeroSection";
import ProcessPurchase from "../newUIProductDetailpageLayoutOne/ProcessPurchase";
import MoneyTimeSection from "../newUIProductDetailpageLayoutOne/MoneyTimeSection";
import SuccessStatics from "../newUIProductDetailpageLayoutOne/SuccessStatics";
import PaymentGateway from "../newUIProductDetailpageLayoutOne/PaymentGateway";
import FaqSection from "../newUIProductDetailpageLayoutOne/FaqSection";
import ClientReview from "../newUIProductDetailpageLayoutOne/ClientReview";
import PerfectPlan from "../newUIProductDetailpageLayoutOne/PerfectPlan";
import ResponsiveUISlider from "../newUIProductDetailpageLayoutOne/ResponsiveUISlider";
import HelpAndSupport from "../newUIProductDetailpageLayoutOne/HelpAndSupport";
import ReadyToPower from "../newUIProductDetailpageLayoutOne/ReadyToPower";
import { ProductDetails } from "@/types";
import InnerPagesSect from "../layoutTwo/sections/InnerPagesSect";

interface LayoutOneProps {
  productDetails: ProductDetails;
  checkoutUrl: string;
  extendedLicensePrice: number;
  extendedLicenseLink: string;
  regularLicensePrice: number;
  salePrice?: number;
  extendedLicenseSalePrice?: number;
  productName: string;
}

const LayoutOne = ({ productDetails, checkoutUrl, extendedLicensePrice, extendedLicenseLink, regularLicensePrice, salePrice, extendedLicenseSalePrice, productName }: LayoutOneProps) => {

  const productDescription = productDetails.product_description[0];
  const productTestimonial = productDetails.product_testimonials;
  const layoutOneDetails = productDescription;
  const introSection = layoutOneDetails?.intro_section;
  const technologySection = layoutOneDetails?.technology_section;
  const productElementSection = layoutOneDetails?.product_element_section;
  const featureSection = layoutOneDetails?.feature_section;
  const paymentGatewaySection = layoutOneDetails?.payment_gateway_section;
  const appWiseFeatureSection = layoutOneDetails?.app_wise_feature_section;
  const helpSection = layoutOneDetails?.help_section;

  const productTestimonials = productTestimonial || [];
  const productFaqs = productDetails.product_faqs;

  return (
    <div className="overflow-x-hidden">
      {
        introSection &&
        <HeroSection
          title={introSection?.title || ""}
          description={introSection?.description || ""}
          mainImage={introSection?.image_url || ""}
          otherImagesUrl={introSection?.other_images_url || []}
          technologySection={technologySection}
        />
      }

      {/* Passing product element data to SliderSection */}
      {
        productElementSection &&
        <SliderSection
          title={productElementSection?.title || ""}
          description={productElementSection?.description || ""}
          elements={(productElementSection?.elements || []).map(
            (element, index) => ({
              id: index + 1,
              name: element.name,
              details: element.details || "",
              image_url: element.image_url,
              type: element.type,
              link: element.link === null ? undefined : element.link,
              android_link: element.android_link,
              ios_link: element.ios_link,
              panel_link: element.panel_link,
            })
          )}
        />
      }

      {/* Pass feature_section data to WhyChooseUs */}
      {
        featureSection &&
        <WhyChooseUs
          title={featureSection?.title || ""}
          description={featureSection?.description || ""}
          features={featureSection?.features || []}
          mainImage={featureSection?.main_image_url}
        />
      }

      {/* Payment Gateway Section with proper data */}
      {paymentGatewaySection && (
        <PaymentGateway
          title={paymentGatewaySection?.title || ""}
          description={paymentGatewaySection?.description || ""}
          gateways={paymentGatewaySection?.gateways || []}
          image_url={
            paymentGatewaySection?.payment_gateway_main_image_url || ""
          }
        />
      )}

      <SuccessStatics />

      {/* FeaturesSection with panel-wise features */}
      {

        productDetails?.product_description[0] &&
        <InnerPagesSect
          title={
            productDetails.product_description[0].panel_wise_feature_section.title
          }
          description={
            productDetails.product_description[0].panel_wise_feature_section
              .description
          }
          tabs={
            productDetails.product_description[0].panel_wise_feature_section.tabs
          }
          layoutOne={true}
        />
      }

      <MoneyTimeSection productName={productName} />

      {/* Pass app-wise feature data to ResponsiveUISlider */}
      {
        appWiseFeatureSection &&
        <ResponsiveUISlider appFeatures={appWiseFeatureSection} />
      }

      <ProcessPurchase productName={productName} />

      {/* Pass testimonials data to ClientReview */}
      {
        productTestimonials &&
        <ClientReview testimonials={productTestimonials} productName={productName}/>
      }

      <PerfectPlan layoutOne={true} checkoutUrl={checkoutUrl} extendedLicensePrice={extendedLicensePrice} extendedLicenseLink={extendedLicenseLink} regularLicensePrice={regularLicensePrice} salePrice={salePrice} extendedLicenseSalePrice={extendedLicenseSalePrice} />

      {
        productFaqs &&
        <FaqSection faqs={productFaqs} />
      }

      {
        helpSection &&
        <HelpAndSupport helpSection={helpSection} />
      }

      <ReadyToPower checkoutUrl={checkoutUrl} productName={productName}/>
    </div>
  );
};

export default LayoutOne;
