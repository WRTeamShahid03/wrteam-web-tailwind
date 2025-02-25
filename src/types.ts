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
    description: string
    alt: string
}