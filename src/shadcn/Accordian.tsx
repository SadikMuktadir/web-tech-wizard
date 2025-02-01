import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Accordian = () => {
  return (
    <div className="my-[50px] max-w-7xl p-5 mx-auto">
      <div className="mb-10 mx-auto flex max-w-7xl flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-blue-600">
          FAQS
        </h2>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services do you offer?</AccordionTrigger>
            <AccordionContent>
              We specialize in custom web and app development, SEO optimization,
              creative graphics design, and business automation. Our team also
              offers cutting-edge technology solutions and end-to-end support to
              help you scale your business.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long does it take to develop a website or app?
            </AccordionTrigger>
            <AccordionContent>
              The timeline varies depending on the complexity of the project.
              Generally, websites take between 4-6 weeks, and apps may take 8-12
              weeks. We’ll provide an estimated timeline after discussing your
              project requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can you help with existing website redesigns?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Whether you're looking for a fresh new look or improved
              functionality, we can redesign your website to meet modern
              standards, improve user experience, and optimize it for SEO.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you offer ongoing support after the project is completed?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We offer ongoing support for maintenance, updates, and
              troubleshooting. Our goal is to ensure your website or app
              continues to perform at its best.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What industries do you serve?</AccordionTrigger>
            <AccordionContent>
              We work with clients across various industries, including
              eCommerce, education, healthcare, entertainment, real estate, and
              more. Our solutions are customized to meet the unique needs of
              each industry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What’s the difference between SEO and PPC?
            </AccordionTrigger>
            <AccordionContent>
              SEO (Search Engine Optimization) focuses on improving your
              website's organic ranking on search engines, while PPC
              (Pay-Per-Click) involves paid ads. Both are effective but serve
              different goals—SEO helps build long-term traffic, while PPC can
              bring immediate visibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What platforms do you develop mobile apps for?
            </AccordionTrigger>
            <AccordionContent>
              We develop mobile apps for both Android and iOS platforms,
              ensuring that your app reaches the widest possible audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              How do you ensure the security of my website or app?
            </AccordionTrigger>
            <AccordionContent>
              We follow best practices in security, including data encryption,
              regular updates, secure coding practices, and vulnerability
              assessments, to protect your website or app from potential
              threats.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              Will my website be mobile-friendly?
            </AccordionTrigger>
            <AccordionContent>
              Yes! All websites we develop are fully responsive and optimized
              for mobile devices, ensuring a seamless experience for your users
              across desktops, tablets, and smartphones.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Can you help me with digital marketing or social media?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Along with web development, we provide digital marketing
              services, including social media strategy, content creation, and
              ad management, to help boost your online presence and engage your
              audience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
