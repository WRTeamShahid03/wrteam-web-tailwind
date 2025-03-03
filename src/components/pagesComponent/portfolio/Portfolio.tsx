import React from 'react'
import Layout from '../../layout/Layout'
import CommonSection from './CommonSection'

const Portfolio: React.FC = () => {
    return (
        <Layout>
            <section className='container commonMT'>
                <div className="">
                    <CommonSection/>
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio