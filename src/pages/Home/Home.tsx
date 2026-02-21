import HeroSection from "../../components/Hero/HeroSection";
import FourBlock from "../../components/FourBlockSection/FourBlock";
import Featurex from "../../components/Features/Featurex";
import Services from "../../components/Services/services";
import InfoGrid from "../../components/InfoGrid/InfoGrid";
import Price from "../../components/Price/Price";
import Blog from "../../components/blog/blog";
import Subscription from "../../components/subscription/subscription";
export default function Home() {
  return (
    <>
     <HeroSection/>
     <FourBlock/>
     <Featurex/>
     <Services/>
     <InfoGrid/>
     <Price/>
     <Blog/>
     <Subscription/>
    </>
  );
}