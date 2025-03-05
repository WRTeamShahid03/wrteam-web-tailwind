import Breadcrumb from '@/components/commonComponents/Breadcrumb'
import Layout from '@/components/layout/Layout'
import React from 'react'

const Installation: React.FC = () => {
    return (
        <Layout>
            <Breadcrumb title='Installtion &' blueText='Setup' secondElement='Services' thirdElement='Installtion' />
            <section className='container commonMT'>
                <div className='flexCenter'>
                    <h2 className='sectionTitle'>Flexible Packages to Match <span>Your Needs</span></h2>
                </div>
                <div className='grid xl:grid-cols-4'>
                    <div>
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Installation