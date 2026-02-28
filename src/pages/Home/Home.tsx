import HeroSection from "../../components/Hero/HeroSection";
import FourBlock from "../../components/FourBlockSection/FourBlock";
import Featurex from "../../components/Features/Featurex";
import InfoGrid from "../../components/InfoGrid/InfoGrid";
import Blog from "../../components/blog/blog";
import Subscription from "../../components/subscription/subscription";
export default function Home() {
  return (
    <>
     <HeroSection/>
     <FourBlock/>
     <Featurex/>
     {/* <Services/> */}
     <InfoGrid/>
     {/* <Price/> */}
     <Blog/>
     <Subscription/>
    </>
  );
}