import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsDataTypes } from '@/types';

const FaqsSect = () => {

    const data = [
        {
            id: 0,
            question: 'If i buy exclusive license i can sell product on any other platforms?',
            answer: `No, with an exclusive license, you can sell the product individually, but you cannot distribute it on third-party platforms. The license grants you sole rights for direct sales only.`,
        },
        {
            id: 1,
            question: 'Can I transfer the exclusive license to another party?',
            answer: `No, the exclusive license cannot be transferred to another party. The license is non-transferable and remains valid only for the original licensee.`,
        },
        {
            id: 2,
            question: 'Are there any restrictions on how I can market the product?',
            answer: `Marketing restrictions, if any, will be specified in your agreement. Generally, you have the freedom to market the product as you see fit, within the boundaries of the license terms.`,
        },
        {
            id: 3,
            question: 'How do I handle customer support and inquiries?',
            answer: `You'll be responsible for customer support and handling inquiries.`,
        },
    ];

    return (
        <section className='container commonMT space-y-8 md:space-y-12 lg:space-y-16'>
            <div className="flexColCenter lg:w-[60%] mx-auto text-center commonTextGap">
                <span className='sectionTag'><span>All You Need</span> To Know</span>
                <h6 className='sectionTitle'>Frequently Asked <span>Questions</span></h6>
                <p className='sectionPara'>Find clear answers to common questions about our exclusive licenses. This section covers everything you need to know to understand your license and make the most of it.</p>
            </div>
            <div>
                <Accordion type="single" collapsible className="w-full space-y-6">
                    {
                        data.map((item: faqsDataTypes) => {
                            return <AccordionItem value={item.id.toString()} key={item.id} className='border rounded-[8px] py-2 px-4'>
                                <AccordionTrigger className='text-base data-[state=open]:border-b pb-2 [&>svg]:w-[24px] [&>svg]:h-[24px]'>{item.question}</AccordionTrigger>
                                <AccordionContent className='pt-4 textSecondary font-semibold text-base border-none'>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        })
                    }

                </Accordion>
            </div>
        </section>
    )
}

export default FaqsSect