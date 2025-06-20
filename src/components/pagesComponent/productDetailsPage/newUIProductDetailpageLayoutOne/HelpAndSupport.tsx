import { HelpSection } from "@/types";
import { supportIcon, documentationIcon, installationIcon, customisationIcon } from "@/utils/helpers";
import Link from "next/link";

export default function HelpAndSupport({ helpSection }: { helpSection: HelpSection }) {

  const dataIcons = [
    {
        id: 0,
        img: supportIcon,
    },
    {
        id: 1,
        img: documentationIcon,
    },
    {
        id: 2,
        img: installationIcon,
    },
    {
        id: 3,
        img: customisationIcon,
    },
]

const btnsName = [
    {
        id: 0,
        name: 'Contact Now'
    },
    {
        id: 1,
        name: 'Read Now'
    },
    {
        id: 2,
        name: 'Get Installation'
    },
    {
        id: 3,
        name: 'Get Customization'
    },
]


  return (
    <div className="py-5 md:py-10 container" id="help-and-support">
      <div className="flexColCenter commonTextGap text-center mb-8">
        <h5 className="sectionTitle !font-bold">
          {helpSection?.title}
        </h5>
        <p className="sectionPara">
          {helpSection?.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Customer Support Card */}
        {helpSection?.sections.map((section, index) => (
          <div key={index} className="productPrimaryBg rounded-lg p-6 text-white text-center mt-12 group hover:shadow-lg transition-all duration-300 helpSupportCard">
            <div className="bg-white rounded-full flexCenter mx-auto mb-4 -mt-16 group-hover:productPrimaryBg transition-colors border-[4px] border-white w-[94px] h-[94px] flexCenter">
              <div className="productPrimaryColor w-full h-full flexCenter">
                {dataIcons[index].img}

              </div>
            </div>
            <h6 className="text-xl font-bold mb-2">{section.name}</h6>
            <p className="mb-4 font-medium">{section.detail}</p>
            <Link href={section.link} target="_blank" className="font-semibold border border-white rounded-md px-4 py-2 transition-colors inline-block group-hover:bg-white group-hover:productPrimaryColor">
              {
                btnsName[index].name
              }
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
