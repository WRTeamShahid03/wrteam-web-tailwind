import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  title: string;
  description: string;
  mainImage: string;
  otherImagesUrl: string[];
  technologySection: {
    title: string;
    technologies: {
      image_url: string;
      name: string;
    }[];
  };
}

const HeroSection: React.FC<HeroSectionProps> = (
  {
    title,
    description,
    mainImage,
    otherImagesUrl,
    technologySection
  }: HeroSectionProps
) => {

  return (
    <section className='relative productDetailPrimaryBg pt-8 md:pt-16 lg:pt-20'>
      <div className="flexColCenter container">
        <div className='flex flex-col gap-6 lg:w-[50%] xl:w-[35%] text-center'>
          <h1 className='sectionTitle !font-bold'>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className='flexCenter gap-3 font-semibold mt-5 sm:mt-10'>
          <Link href={''} title='Explore Demo' className='productPrimaryBg p-3 rounded-md flexCenter max-399:text-sm max-399:w-[130px] w-[165px] text-white'>
            Explore Demo
          </Link>
          <Link href={''} title='Buy Now' className='bg-transparent p-3 rounded-md flexCenter max-399:text-sm max-399:w-[130px] w-[165px] productDetailPrimaryColor border-[1px] productDetailPrimaryBorder'>
            Buy Now
          </Link>
        </div>
        <Image src={mainImage} height={600} width={796} className="w-[796px] object-contain mt-[25px] sm:mt-[50px]" alt='product-img' />
        {/* <div> */}
        <h2 className="text-2xl font-semibold text-center mt-2">{technologySection?.title}</h2>
        <div className="flexCenter flex-wrap gap-[8px] sm:gap-[30px] mb-[30px] xl:mb-0 mt-[30px]">
          {technologySection?.technologies?.map((image: { image_url: string, name: string }, index: number) => (
            <div key={index} className="flexColCenter gap-1.5 productCommonAfterBg py-5 sm:py-[36px] rounded-[8px] lg:roun  ded-lg xl:rounded-t-[90px] max-399:w-[90px] w-[150px] 2xl:w-[168px] relative overflow-hidden">
              <Image src={image?.image_url} height={36} width={36} alt='language-img' />
              <span className="sm:text-xl font-semibold productDetailPrimaryColor">{image?.name}</span>
            </div>
          ))}
        </div>
      </div>


      <Image src={otherImagesUrl[0]} width={420} height={236} alt="Hero section" className="max-1199:hidden block object-cover w-[230px] h-[150px] min-1800:w-[420px] min-1800:h-[236px] lg:absolute left-0 top-[222px] rounded-lg border-[6px] productDetailLightPrimaryBorder border-opacity-60" />

      <Image src={otherImagesUrl[3]} width={420} height={236} alt="Hero section" className="max-1199:hidden block object-cover w-[230px] h-[150px] min-1800:w-[420px] min-1800:h-[236px] absolute right-0 bottom-[444px] rounded-lg border-[6px] productDetailLightPrimaryBorder border-opacity-60" />

      <Image src={otherImagesUrl[2]} width={420} height={236} alt="Hero section" className="max-1199:hidden block object-cover w-[220px] h-[130px] min-1800:w-[318px] min-1800:h-[180px] absolute right-[110px] top-[222px] rounded-lg border-[6px] productDetailLightPrimaryBorder border-opacity-60 transform -rotate-12 animateHeroImgTwo" />

      <Image src={otherImagesUrl[1]} width={420} height={236} alt="Hero section" className="max-1199:hidden block object-cover w-[220px] h-[130px] min-1800:w-[318px] min-1800:h-[180px] absolute between-1200-1399:left-[30px] left-[110px] top-[400px] rounded-lg border-[6px] productDetailLightPrimaryBorder border-opacity-60 transform -rotate-12 animateHeroImgOne" />

    </section>
  )
}

export default HeroSection