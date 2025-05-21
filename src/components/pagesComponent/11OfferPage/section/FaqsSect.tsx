import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsDataTypes } from "@/types";

const FaqsSect = () => {

  const data = [
    {
      id: 1,
      question: "Can i fully customize all source codes?",
      answer: `Yes, you can fully customize code as you want`,
    },
    {
      id: 2,
      question: "How can i obtain 10% discount on installation service?",
      answer: `After purchasing 11 source codes reach out us on WhatsApp: +91 6355 104 724`,
    },
    {
      id: 3,
      question: "What if I face any issues during installation?",
      answer: `You can contact our support team for help, or take advantage of our installation service at a 30% discount.`,
    },
    {
      id: 4,
      question: "Can I contact support if I have questions before buying?",
      answer: `Yes, you can reach out to our support team for any pre-purchase questions you might have.`,
    },
    {
      id: 5,
      question: "What platforms are the source codes compatible with?",
      answer: `Our source codes are built in flutter so it's compatible with iOS, Android, and web platforms.`,
    },
    {
      id: 6,
      question: "Do you offer customization services?",
      answer: `Yes, we offer customization services at an additional cost. You can contact us for more details.`,
    },
  ];

  return (
    <section className="container commonMB commonMT space-y-8 md:space-y-12 lg:space-y-16">
      <div className="flexColCenter mx-auto text-center commonTextGap">
        <h6 className="text-xl md:text-3xl lg:text-4xl/[50px] font-[500] [&_span]:primaryColor !font-roboto text-center lg:text-start">
          Don&apos;t Just Take Our Word For It - Hear From{" "}
          <span>Our Satisfied Customers!</span>
        </h6>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full space-y-6">
          {data.map((item: faqsDataTypes) => {
            return (
              <AccordionItem
                value={item.id.toString()}
                key={item.id}
                className="bg-[#316be71a] border-none rounded-[8px] p-4"
              >
                <AccordionTrigger className="text-base data-[state=open]:border-b pb-2 [&>svg]:w-[24px] [&>svg]:h-[24px] [&>svg]:primaryColor shadow-[0_1px_5px_0_#0000001f]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-[#5c788c] font-semibold text-base border-none">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqsSect;
