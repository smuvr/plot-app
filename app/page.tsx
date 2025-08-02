import HeroBannerSection from "@/components/hero-banner-section";
import NecessitySection from "@/components/necessity-section";
import TypesOfBlindsSection from "@/components/types-of-blinds-section";

export default function Home() {
  return (
    <div className={'flex flex-col gap-4 relative'}>

      <div className={'absolute top-0 right-0 left-0 z-30 text-white'}>
        <nav className={'flex gap-4'}>
          <span>Menu</span>
          <span>Menu</span>
          <span>Menu</span>
          <span>Menu</span>
        </nav>
      </div>


      <HeroBannerSection/>
      <NecessitySection/>
      <TypesOfBlindsSection/>
    </div>
  );
}
