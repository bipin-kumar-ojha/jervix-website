import HeroSection from "../../components/Hero/HeroSection";
import FourBlock from "../../components/FourBlockSection/FourBlock";
import Featurex from "../../components/Features/Featurex";
import InfoGrid from "../../components/InfoGrid/InfoGrid";
import Blog from "../../components/blog/blog";
import Subscription from "../../components/subscription/subscription";
import Price from "../../components/Price/Price";
// import Services from "../../components/Services/services";
import ImageContentBlock from "../../components/imageContentBlock/ImageContentBlock";
export default function Home() {
  return (
    <>
     <HeroSection/>
     <FourBlock/>
     <Featurex/>
     {/* <Services/> */}
     <ImageContentBlock/>
     <InfoGrid/>
     <Price/>
     <Blog/>
     <Subscription/>
    </>
  );
}