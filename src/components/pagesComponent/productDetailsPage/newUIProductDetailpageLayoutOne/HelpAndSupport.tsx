import { HelpSection } from "@/types";
import { supportIcon, documentationIcon, installationIcon, customisationIcon } from "@/lib/helper";
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
    <div className="py-10 container">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          {helpSection?.title}
        </h2>
        <p className="text-gray-700">
          {helpSection?.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Customer Support Card */}
        {helpSection?.sections.map((section, index) => (
          <div key={index} className="productPrimaryBg rounded-lg p-6 text-white text-center mt-12 group hover:shadow-lg transition-all duration-300">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 group-hover:productPrimaryBg transition-colors border-[4px] border-white">
              <div className="productPrimaryColor overflow-hidden w-full h-full">
                {dataIcons[index].img}

              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{section.name}</h3>
            <p className="mb-4">{section.detail}</p>
            <a href={section.link} target="_blank" className="border border-white rounded-md px-4 py-2 transition-colors inline-block group-hover:bg-white group-hover:productPrimaryColor">
              {
                btnsName[index].name
              }
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
