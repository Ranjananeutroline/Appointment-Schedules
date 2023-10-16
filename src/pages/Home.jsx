import React from 'react'
import Header from "../components/Home-section/Header/Header";
import TheNavbar from "../components/Home-section/Navbar/TheNavbar"
import GetAquote from "../components/Contactus-section/GetAQuote/GetAquote"
import WhoWeAre from "../components/Home-section/WhoWeAre/WhoWeAre"
import Services from "../components/Home-section/Services/Services"
// import OurPartners from "../components/Home-section/OurPartners/OurPartners"
import OurClients from "../components/Home-section/OurClients/OurClients"
import ReadyToHelp from "../components/Home-section/ReadyToHelp/ReadyToHelp"
import Footer from "../components/Home-section/Footer/Footer"
import OurPartnersCarousel from '../components/Home-section/OurPartners/OurPartnersCarousel';
import GoToTop from '../components/Home-section/GotoTop/GoToTop';
import ScrollToTop from '../components/Home-section/GotoTop/ScrollToTop';

function Home() {
  return (
    <>

      <TheNavbar />
      <ScrollToTop />
        <Header />
        <GetAquote/>
        <WhoWeAre />
        <Services />
        {/* <OurPartners/> */}
        <OurPartnersCarousel />
        <OurClients />
        <ReadyToHelp />
        <GoToTop />
        <Footer />
    </>
  )
}

export default Home