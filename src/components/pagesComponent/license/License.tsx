import Layout from '@/components/layout/Layout'
import React from 'react'
import LicensePlan from './LicensePlan'

const License = () => {
  return (
    <Layout>
      <section className='container commonMT commonMB space-y-8 md:space-y-12'>
        <div className="flexCenter">
          <h1 className='sectionTitle'><span>Discover More Value: That is Align Your Needs</span></h1>
        </div>
        <div>
          <LicensePlan />
        </div>
      </section>
    </Layout>
  )
}

export default License