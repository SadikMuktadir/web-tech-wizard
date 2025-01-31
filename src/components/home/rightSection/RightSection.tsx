import BannerSection from "./BannerSection";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import DarkMode from "./DarkMode";
import Services from "./Services";

const RightSection = () => {
  return (
    <div>
      <div className="">
        <DarkMode></DarkMode>
      </div>
      <div id="home">
        <BannerSection></BannerSection>
      </div>
      <div id="services">
        <Services></Services>
      </div>
      <div id="blogs">
        <Blogs></Blogs>
      </div>
      <div id="contactUs">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default RightSection;
