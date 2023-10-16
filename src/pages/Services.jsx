import { useState } from 'react';
import TheNavbar from '../components/Home-section/Navbar/TheNavbar'
import Header from '../components/Services-section/Header/Header'
import Ourservices from '../components/Services-section/Ourservices/Ourservice'
import Letschat from '../components/Services-section/Letschat/Letschat'
// import Map from './components/service-section/Map/Map';
import Formservice from '../components/Services-section/Formservice/Formservice'
import Footer from "../components/Home-section/Footer/Footer"
import GoToTop from '../components/Home-section/GotoTop/GoToTop';
import ScrollToTop from '../components/Home-section/GotoTop/ScrollToTop';


function Services() {
  const [state, setstate] = useState(true)
  const closeme=(state)=>{
    setstate(false)
  }
    return (
      <>
        <TheNavbar/>
        <ScrollToTop />
        <Header/>
        <Ourservices closeme={closeme}/>
        <Letschat/>
        <Formservice />
        <GoToTop />
        <Footer/>
        {/* <Map /> */}
      </>
    )
  }
  
  export default Services