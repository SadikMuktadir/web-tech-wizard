import Accordian from "@/shadcn/Accordian";
import BannerSection from "./BannerSection";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import DarkMode from "./DarkMode";
import Services from "./Services";
import Projects from "./Projects";

const RightSection = () => {
  return (
    <div className="p-5 mx-auto">
      <div className="">
        <DarkMode></DarkMode>
      </div>
      <div id="home">
        <BannerSection></BannerSection>
      </div>
      <div id="services">
        <Services></Services>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="blogs">
        <Blogs></Blogs>
      </div>
      <div id="faqs">
        <Accordian></Accordian>
      </div>
      <div id="contactUs">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default RightSection;
