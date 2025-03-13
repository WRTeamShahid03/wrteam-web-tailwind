import Image from "next/image"
import Link from "next/link"
import img from '../../../../../assets/images/productDetailPage/layoutOne/heroSectionMainImg.svg'
import android from '../../../../../assets/images/productDetailPage/layoutOne/Android.svg'
import heroSecImg from '../../../../../assets/images/productDetailPage/layoutOne/heroSectionImg.svg'


const HeroSection = () => {
    return (
        <section className='relative productDetailPrimaryBg pt-20'>
            <div className="flexColCenter">
                <div className='flex flex-col gap-6 lg:w-[35%] text-center'>
                    <h1 className='sectionTitle !font-bold'>Simplify Your Ecommerce. Empower Your Business.</h1>
                    <p className='sectionPara'>From seamless operations to delighted customers, Ekart equips you with the tools to streamline every step.</p>
                </div>
                <div className='flexCenter flex-wrap gap-3 font-semibold mt-10'>
                    <Link href={''} title='Explore Demo' className='productPrimaryBg p-3 rounded-md flexCenter w-[165px] text-white'>
                        Explore Demo
                    </Link>
                    <Link href={''} title='Buy Now' className='bg-transparent p-3 rounded-md flexCenter w-[165px] productDetailPrimaryColor border-[1px] productDetailPrimaryBorder'>
                        Buy Now
                    </Link>
                </div>
                <Image src={img} height={600} width={796} className="w-[796px] object-contain mt-[50px]" alt='product-img' />
                {/* <div> */}
                <h2 className="text-2xl font-semibold text-center">Beyond Limits: Powered by Innovation</h2>
                <div className="flexCenter flex-wrap gap-[30px] mb-[30px] xl:mb-0 mt-[30px]">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div key={index} className="flexColCenter gap-1.5 bg-[#0383FE0A] py-[36px] lg:rounded-lg xl:rounded-t-[90px] w-[150px] 2xl:w-[168px] relative overflow-hidden">
                            <Image src={android} height={36} width={36} alt='language-img' />
                            <span className="text-xl font-semibold text-[#0383fe]">Android</span>
                        </div>
                    ))}
                </div>
            </div>


            <Image src={heroSecImg} width={420} height={236} alt="Hero section" className="hidden xl:block object-cover w-[230px] h-[150px] above-1800:w-[420px] above-1800:h-[236px] lg:absolute left-0 top-[222px] rounded-lg border-[6px] border-[#0383fe] border-opacity-60" />

            <Image src={heroSecImg} width={420} height={236} alt="Hero section" className="hidden xl:block object-cover w-[230px] h-[150px] above-1800:w-[420px] above-1800:h-[236px] absolute right-0 bottom-[444px] rounded-lg border-[6px] border-[#0383fe] border-opacity-60" />

            <Image src={heroSecImg} width={420} height={236} alt="Hero section" className="hidden xl:block object-cover w-[220px] h-[130px] above-1800:w-[318px] above-1800:h-[180px] absolute right-[110px] top-[222px] rounded-lg border-[6px] border-[#0383fe] border-opacity-60 transform -rotate-12 animateHeroImgTwo" />

            <Image src={heroSecImg} width={420} height={236} alt="Hero section" className="hidden xl:block object-cover w-[220px] h-[130px] above-1800:w-[318px] above-1800:h-[180px] absolute left-[110px] top-[400px] rounded-lg border-[6px] border-[#0383fe] border-opacity-60 transform -rotate-12 animateHeroImgOne" />

        </section>
    )
}

export default HeroSection