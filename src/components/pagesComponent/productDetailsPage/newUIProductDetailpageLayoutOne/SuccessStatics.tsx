import Image from 'next/image'
import icon1 from '../../../../assets/images/productDetailPage/layoutTwo/infoIcons/icon1.png'
import icon2 from '../../../../assets/images/productDetailPage/layoutTwo/infoIcons/icon2.png'
import icon3 from '../../../../assets/images/productDetailPage/layoutTwo/infoIcons/icon3.png'
import icon4 from '../../../../assets/images/productDetailPage/layoutTwo/infoIcons/icon4.png'
import icon5 from '../../../../assets/images/productDetailPage/layoutTwo/infoIcons/icon5.png'
import { servicesProcessDataTypes } from '@/types'


export default function SuccessStatics() {

  const data = [
    {
      id: 0,
      img: icon1,
      title: 'Elite Author',
      desc: 'On CodeCanyon'
    },
    {
      id: 1,
      img: icon2,
      title: '19000+',
      desc: 'Global Clients'
    },
    {
      id: 2,
      img: icon3,
      title: 'White Label',
      desc: 'Fully Customizable'
    },
    {
      id: 3,
      img: icon4,
      title: 'FREE Updates',
      desc: 'For Life-Time'
    },
    {
      id: 4,
      img: icon5,
      title: 'One Time Buy',
      desc: 'No Monthly Fees'
    },
  ]

  return (
    <div className="container commonMT">
      <div className="productSecondaryBg w-full flexCenter lg:!justify-between flex-wrap py-16 max-575:px-2 px-8 max-575:gap-x-0 gap-8 my-10 rounded-3xl">

        {
          data.map((item: servicesProcessDataTypes) => {
            return <div className="text-center text-white flex flex-col items-center gap-2 sm:gap-3 w-[136px] lg:w-auto" key={item.id}>
              <div className="">
                <Image src={item.img} width={0} height={0} alt={item.title} className='w-[40px] sm:w-[50px] lg:w-auto h-auto' />
              </div>
              <h6 className="text-sm sm:text-base md:text-2xl font-semibold mb-0 mt-1">
                {item.title}
              </h6>
              <p className="text-sm md:text-lg">{item.desc}</p>
            </div>
          })
        }
      </div>
    </div>
  );
}
