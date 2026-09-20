import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertySearch from "./components/PropertySearch";
import Intro from "./components/Intro";
import Services from "./components/Services";
import FeaturedProperties from "./components/FeaturedProperties";
import PropertyReel from "./components/PropertyReel";
import RentalProperties from "./components/RentalProperties";
import RecentSales from "./components/RecentSales";
import Values from "./components/Values";
import Locations from "./components/Locations";
import SuburbProfiles from "./components/SuburbProfiles";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import SellBand from "./components/SellBand";
import AppraisalForm from "./components/AppraisalForm";
import Holiday from "./components/Holiday";
import Contact from "./components/Contact";
import EnquiryForm from "./components/EnquiryForm";
import Social from "./components/Social";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <span id="top" />
        <Hero />
        <PropertySearch />
        <Intro />
        <Services />
        <FeaturedProperties />
        <PropertyReel />
        <RentalProperties />
        <RecentSales />
        <Values />
        <Locations />
        <SuburbProfiles />
        <Team />
        <Testimonials />
        <SellBand />
        <AppraisalForm />
        <Holiday />
        <Contact />
        <EnquiryForm />
        <Social />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
