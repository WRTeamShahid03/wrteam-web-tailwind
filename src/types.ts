import { StaticImageData } from "next/image"

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
