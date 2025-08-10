import FeaturesSection from "@/components/sections/FeaturesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import RanchFenceSection from "@/components/sections/RanchFenceSection";
import LouveredFenceSection from "@/components/sections/LouveredFenceSection";
import OtherProductsSection from "@/components/sections/OtherProductsSection";
import GuaranteesSection from "@/components/sections/GuaranteesSection";
import DeliveryAndPaymentSection from "@/components/sections/DeliveryAndPaymentSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className={'flex flex-col'}>
      <HeroSection/>
      <FeaturesSection/>
      <div id={'warto'}>
        <WhyUsSection/>
      </div>
      <div id={'about'}>
        <AboutUsSection/>
      </div>
      <div id={'products'}>
        <RanchFenceSection/>
      </div>
      <LouveredFenceSection/>
      <OtherProductsSection/>

      {/*<PartnersSection/>*/}
      {/*<GuaranteesSection/>*/}
      {/*<DeliveryAndPaymentSection/>*/}
      {/*<ContactSection/>*/}
    </div>
  );
}
