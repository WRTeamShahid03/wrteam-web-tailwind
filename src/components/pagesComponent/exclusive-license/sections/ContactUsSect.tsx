import React from 'react'
import ExclusiveLicenseForm from '../ExclusiveLicenseForm'

const ContactUsSect = () => {
  return (
    <section className='commonMT container'>
    <div className=" commonBg py-8 md:py-12 space-y-8 md:space-y-12 lg:space-y-20 px-6 md:px-20 lg:px-32 rounded-[16px] ">
      <div className="flexColCenter lg:w-[70%] mx-auto text-center commonTextGap">
        <span className='sectionTag'><span>Contact</span> Us</span>
        <h4 className='sectionTitle'>Request Your <span>Exclusive License</span></h4>
        <p className='sectionPara'>Fill out the form below to inquire about securing an exclusive license for our product.</p>
      </div>

      <div>
        <ExclusiveLicenseForm />
      </div>
    </div>
  </section>
  )
}

export default ContactUsSect