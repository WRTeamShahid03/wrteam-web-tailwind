import { StaticImageData } from "next/image"

export interface counterData {
    img: string,
    counts: string,
    text: string,
}

export interface itServicesData {
    id: number,
    title: string,
    desc: string,
    icon: string,
    alt: string,
    hoverBg: string,
    link: string
}

export interface technologiesData {
    id: number,
    title: string,
    icon: string,
    alt: string,
}

export interface workChainData {
    id: number,
    img: StaticImageData,
    title: string,
    desc: string
    alt: string
}
export interface servicesBenefitsData {
    id: number,
    icon: StaticImageData,
    title: string,
}
export interface servicesProcessData {
    id: number,
    icon: StaticImageData,
    title: string,
    desc: string,
}
export interface servicesBuildData {
    id: number,
    icon: StaticImageData,
    hoverIcon: StaticImageData,
    title: string,
    alt: string
}