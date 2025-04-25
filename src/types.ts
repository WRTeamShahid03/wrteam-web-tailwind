import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface counterDataTypes {
  img: string;
  counts: string;
  text: string;
}

export interface itServicesDataTypes {
  id: number;
  title: string;
  desc: string;
  icon: string;
  alt: string;
  hoverBg: string;
  link: string;
}

export interface technologiesDataTypes {
  id: number;
  title: string;
  icon: string;
  alt: string;
}

export interface workChainDataTypes {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
  alt: string;
}
export interface servicesBenefitsDataTypes {
  id: number;
  icon: StaticImageData;
  title: string;
}
export interface servicesProcessDataTypes {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
}
export interface servicesBuildDataTypes {
  id: number;
  icon: StaticImageData;
  hoverIcon: StaticImageData;
  title: string;
  alt: string;
}

export interface installationPackagesDataTypes {
  id: number;
  icon: StaticImageData;
  packageName: string;
  setups: string;
  cutPrice: number;
  cutPriceINR: number;
  price: number;
  priceINR: number;
  services: Array<string>;
  excludedServices: Array<string>;
}
export interface comparisonDataTypes {
  id: number;
  title: string;
  point1: string;
  point1Text: string;
  point2: string;
  point2Text: string;
  point3: string;
  point3Text: string;
}

export interface faqsDataTypes {
  id: number;
  question: string;
  answer: string;
}
export interface hireUsTechsDataTypes {
  id: number;
  img: StaticImageData;
  title: string;
  bg: string;
  alt: string;
}

export interface freeSourceCodeTestimonialsDataType {
  id: number;
  name: string;
  reviewFor: string;
  rating: string;
  desc: string;
}

export interface sourceCodeBundlesDataType {
  id: number;
  title: string;
  value: string;
  leftList: Array<string>;
  rightList: Array<string>;
}

export interface offerPageBonusDataType {
  id: number;
  img: StaticImageData;
  title: string;
  text: string;
  price: string;
}

export interface grabBundlesDataType {
  id: number;
  text: string;
  worth: number;
}

export interface marqueTestimonialDataType {
  id: number;
  title: string;
  name: string;
}

// Payment Gateway types
export interface PaymentGateway {
  name: string;
  image: string;
  image_url: string;
}

export interface PaymentGatewaySection {
  title: string;
  description: string;
  gateways: PaymentGateway[];
  image?: string;
  image_url?: string;
  payment_gateway_main_image?: string;
  payment_gateway_main_image_url?: string;
}

export interface PanelWiseFeatureSection {
  title: string;
  description: string;
  tabs: Tab[];
  layoutOne?: boolean;
}

export interface Tab {
  tab_name: string;
  description: string;
  details: {
    title: string;
    short_description: string;
    image_url: string;
  }[];
}

// Panel-wise feature section types
export interface FeatureDetail {
  image: string;
  title: string;
  short_description: string;
  image_url: string;
}

export interface FeatureTab {
  tab_name: string;
  details: FeatureDetail[];
}

export interface ProductHighlightSection {
  title: string;
  short_description: string;
  icon: string;
  icon_url: string;
}

// App-wise feature section types
export interface AppFeature {
  image: string;
  title: string;
  image_url: string;
}

export interface AppTab {
  app_name: string;
  features: AppFeature[];
}

export interface AppWiseFeatureSection {
  title: string;
  tabs: AppTab[];
}

// Product testimonials types
export interface ProductTestimonial {
  id: number;
  name: string;
  review: string;
  ratings: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  rating_for: string;
}

// FAQ types
export interface ProductFaq {
  question: string;
  answer: string;
  category: string;
}

export interface ProductFaqs {
  [category: string]: ProductFaq[][][];
}

export interface HelpAndSupportSection {
  title: string;
  description: string;
  image: string;
  image_url: string;
}

// Help section types
export interface HelpSectionItem {
  icon?: string;
  icon_url?: string;
  name: string;
  detail: string;
  link: string;
}

export interface HelpSection {
  title: string;
  description: string;
  sections: HelpSectionItem[];
}

// Update ProductDetails to include product_faqs and help_section
export interface ProductDetails {
  id: number;
  theme_color: string;
  secondary_color: string;
  style: number;
  icon_image: string;
  product_description: [
    {
      intro_section: IntroSection;
      technology_section: TechnologySection;
      product_element_section: ProductElementSection;
      feature_section: FeatureSection;
      payment_gateway_section: PaymentGatewaySection;
      panel_wise_feature_section: PanelWiseFeatureSection;
      product_highlight_section: ProductHighlightSection[];
      app_wise_feature_section: AppWiseFeatureSection;
      help_and_support_section: HelpAndSupportSection;
      help_section: HelpSection;
    }
  ];
  product_testimonials: ProductTestimonial[];
  product_faqs: ProductFaqs;
}

// WhyChooseUs props
export interface WhyChooseUsProps {
  title?: string;
  description?: string;
  features?: Feature[];
  mainImage?: string;
}

// Feature section types
export interface Feature {
  name: string;
  detail: string;
  image: string;
  image_url: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  features: Feature[];
  main_image?: string;
  main_image_url?: string;
}

// PaymentGateway props
export interface PaymentGatewayProps {
  title?: string;
  description?: string;
  gateways?: PaymentGateway[];
  image?: string;
  image_url?: string;
}

// Layout One Types
export interface IntroSection {
  title: string;
  description: string;
  image: string;
  image_url: string;
  other_images: string[];
  other_images_url: string[];
}

export interface TechnologySection {
  title: string;
  description: string | null;
  technologies: {
    image_url: string;
    name: string;
  }[];
}

export interface ProductElementSection {
  title: string;
  description: string;
  elements: ProductElement[];
}

export interface ProductElement {
  name: string; // Element name/title
  type: string; // 'app' or 'panel'
  details?: string; // HTML description
  image: string; // Image file path
  image_url: string; // Full image URL
  style: string; // Style identifier
  link?: string | null; // Optional link
  android_link?: string; // Optional Android app link
  ios_link?: string; // Optional iOS app link
  panel_link?: string; // Optional panel link
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface LayoutOneProps {
  productDetails: {
    product_description: [
      {
        intro_section: IntroSection;
        technology_section: TechnologySection;
        product_element_section: ProductElementSection;
        feature_section: FeatureSection;
      }
    ];
  };
}

interface CategoryType {
  name: string;
  [key: string]: string | number | boolean | object | null | undefined; // For additional properties
}

export interface OldUiProductData {
  id: number;
  codecanyon_product_code: string;
  name: string;
  product_title: string;
  slug: string;
  price: number;
  sale_price: number | null;
  extended_sale_price: number | null;
  trending: string;
  icon_image: string;
  icon_image2: string;
  category: CategoryType | null;
  banner_image: string;
  codecanyon_link: string;
  sales: number;
  rating: number;
  description: string;
  checkout_url: string;
  content_id: string;
  seo_title: string | null;
  seo_keywords: string | null;
  seo_description: string | null;
  seo_image: string | null;
  codecanyon_other_data: string;
  rank: number;
  theme_color: string;
  secondary_color: string;
  extended_license_link: string;
  extended_license_price: number;
  style: number;
  display_new_ui: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  subcategory: CategoryType | null;
}
