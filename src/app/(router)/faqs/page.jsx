import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

const FAQs = () => {
  return (
    <>
      <section
        className="bg-gray-100 bg-gradient-to-r from-blue-50 to-purple-100"
        style={{ margin: "70px 0 0 0" }}
      >
        <div className=" pt-24">
          <h1 className="text-center py-2 font-bold underline shadow mx-4 bg-purple-50">
            Frequently Asked Questions
          </h1>
          <div className="container mx-auto px-4 py-8">
          <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">What aviation courses do you offer?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md">We offer a variety of courses, including a Diploma in Airport Management, Cabin Crew Training, Pilot Training, and Aviation Safety & Security.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">Are the courses recognized by any governing body?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md">Yes, our courses are Government authorized institution, ensuring they meet industry standards.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold"> Do you offer any online courses?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md">Currently, our courses are conducted in online or Offline both Modes.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="4">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">Do you offer job placement assistance?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md">Yes, we offer job placement assistance to all our students.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="5">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">What is the duration of the courses?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md"> Course durations vary.all  course duration are 3 months, 6 months, 11 months..</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="6">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">What are the eligibility criteria for admission?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md"> Eligibility varies by course. Generally, a minimum of a high school diploma is required, along with proficiency in good communication and confidence.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="7">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">What is the admission process?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md"> The process includes filling out the application form, submitting documents, pay required fee, attending an interview, and receiving an offer letter if selected.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="8">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">What are the fees for the courses?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md"> Course fees vary depending on the program. Please refer to the specific course page for detailed fee information feel free to 
                            <Link href="/contact">Contact Us</Link>
                            .</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="9">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">What is the refund policy?</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-md"> The fees paid are non-refundable and non-transferable under any circumstances. and more info please refer to our <Link href="/privacy_policy" className="text-blue-700 font-bold">Refund Policy</Link> page.</p>
                    </AccordionContent>
                </AccordionItem>

          </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
