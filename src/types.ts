import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export interface counterDataTypes {
    img: string,
    counts: string,
    text: string,
}

export interface itServicesDataTypes {
    id: number,
    title: string,
    desc: string,
    icon: string,
    alt: string,
    hoverBg: string,
    link: string
}

export interface technologiesDataTypes {
    id: number,
    title: string,
    icon: string,
    alt: string,
}

export interface workChainDataTypes {
    id: number,
    img: StaticImageData,
    title: string,
    desc: string
    alt: string
}
export interface servicesBenefitsDataTypes {
    id: number,
    icon: StaticImageData,
    title: string,
}
export interface servicesProcessDataTypes {
    id: number,
    img: StaticImageData,
    title: string,
    desc: string,
}
export interface servicesBuildDataTypes {
    id: number,
    icon: StaticImageData,
    hoverIcon: StaticImageData,
    title: string,
    alt: string
}

export interface installationPackagesDataTypes {
    id: number,
    packageName: string,
    setups: string,
    cutPrice: number,
    price: number,
    services: Array<string>,
    excludedServices: Array<string>
}
export interface comparisonDataTypes {
    id: number,
    title: string,
    point1: string,
    point1Text: string,
    point2: string,
    point2Text: string,
    point3: string,
    point3Text: string,
}

export interface faqsDataTypes {
    id: number,
    question: string,
    answer: string,
}
export interface hireUsTechsDataTypes {
    id: number,
    img: StaticImageData,
    title: string,
    bg: string,
    alt: string
}

export interface freeSourceCodeTestimonialsDataType {
    id: number,
    name: string,
    reviewFor: string,
    rating: string,
    desc: string
}

export interface sourceCodeBundlesDataType {
    id: number,
    title: string,
    value: string,
    leftList: Array<string>,
    rightList: Array<string>,
}

export interface offerPageBonusDataType {
    id: number,
    img: StaticImageData,
    title: string,
    text: string,
    price: string,
}

export interface grabBundlesDataType {
    id: number,
    text: string,
    worth: number
}

export interface marqueTestimonialDataType {
    id: number,
    title: string,
    name: string
}

export interface ProductDetails {
    id: number;
    theme_color: string;
    secondary_color: string;
    style: number;
    icon_image: string;
    product_description: [{
        intro_section: IntroSection;
        technology_section: TechnologySection;
        product_element_section: ProductElementSection;
        feature_section: FeatureSection;
    }];
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
    name: string;             // Element name/title  
    type: string;             // 'app' or 'panel'
    details?: string;         // HTML description
    image: string;            // Image file path  
    image_url: string;        // Full image URL
    style: string;            // Style identifier
    link?: string | null;     // Optional link
    android_link?: string;    // Optional Android app link
    ios_link?: string;        // Optional iOS app link
    panel_link?: string;      // Optional panel link
}
 
export interface FeatureSection {
    title: string;
    description: string;
    main_image_url: string;
    features: Feature[];
}

export interface Feature {
    name: string;
    detail: string;
    image: string;
    image_url: string;
}

// Interface for feature data
export interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
  }
  
  
  export interface WhyChooseUsProps {
    title?: string;
    description?: string;
    features?: Feature[];
    mainImage?: string;
    data?: FeatureItem[]; // Keep old format for backward compatibility
  }

export interface LayoutOneProps {
    productDetails: {
        product_description: [{
            intro_section: IntroSection;
            technology_section: TechnologySection;
            product_element_section: ProductElementSection;
            feature_section: FeatureSection;
        }];
    };
}