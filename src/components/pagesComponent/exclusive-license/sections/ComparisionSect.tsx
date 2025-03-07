import React from 'react'

const ComparisionSect = () => {

    const comparisonData = [
        {
            id: 0,
            title: 'Regular License',
            point1: 'Use',
            point1Text: 'Personal or commercial with limited distribution.',
            point2: 'Resale',
            point2Text: 'Not allowed.',
            point3: 'Customization',
            point3Text: 'Full flexibility.',
        },
        {
            id: 1,
            title: 'Extended License',
            point1: 'Use',
            point1Text: 'Commercial projects with broader distribution.',
            point2: 'Resale',
            point2Text: 'Not allowed.',
            point3: 'Customization',
            point3Text: 'Full flexibility.',
        },
        {
            id: 2,
            title: 'Exclusive License',
            point1: 'Use',
            point1Text: 'Sole rights, unlimited distribution.',
            point2: 'Resale',
            point2Text: 'Allowed to multiple clients.',
            point3: 'Customization',
            point3Text: 'Full flexibility.',
        },
    ];

    return (
        <section className='commonMT'>
            <div className="container space-y-8 md:space-y-12 lg:space-y-20">
                <div className="flexColCenter lg:w-[60%] mx-auto text-center commonTextGap">
                    <span className='sectionTag'><span>License</span> Comparison</span>
                    <h5 className='sectionTitle'>Difference Between <span>Regular,</span> <span>Extended,</span> and <span>Exclusive</span> Licenses</h5>
                    <p className='sectionPara'>Follow these detailed steps to get started with your exclusive license, ensuring you effectively utilize all the benefits and opportunities it offers, and set yourself up for maximum success.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        comparisonData.map((data) => {
                            return <div className='flexColCenter !items-start border border-[#545a684d] rounded-[16px] p-4 space-y-6' key={data.id}>
                                <div className='border-b border-[#545a684d] pb-2 w-full'>
                                    <h6 className='font-bold text-lg'>{data.title}</h6>
                                </div>

                                <div className='flexColCenter !items-start commonTextGap text-sm'>
                                    <div className='flex gap-2 text-[#575757]'>
                                        <span className='font-semibold text-[15px]'>{data.point1}:</span>
                                        <span className='font-normal'>{data.point1Text}</span>
                                    </div>
                                    <div className='flex gap-2 text-[#575757]'>
                                        <span className='font-semibold text-[15px]'>{data.point2}:</span>
                                        <span className='font-normal'>{data.point2Text}</span>
                                    </div>
                                    <div className='flex gap-2 text-[#575757]'>
                                        <span className='font-semibold text-[15px]'>{data.point3}:</span>
                                        <span className='font-normal'>{data.point3Text}</span>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>


        </section>
    )
}

export default ComparisionSect