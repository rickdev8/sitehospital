import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Doctor from './components/doctors/Doctor';
import Buttoneexplore from './components/explorebutton/Buttonexplore';
import Facilities from './components/facilities/Facilities';
import Footer from './components/footer/Footer';
import NavbarMobile from './components/navbarmobile/NavbarMobile';
import Opinion from './components/opinions/Opinion';
import Partners from './components/partners/Partners';
import Services from './components/services/Services';
import Navbar from './components/navbar/Navbar';

function App() {
  const [navbar, setNavbar] = useState(<Navbar />);

  useEffect(() => {
    const tela = window.innerWidth;

    if (tela <= 480) {
      setNavbar(<NavbarMobile />);
    } else {
      setNavbar(<Navbar />);
    }

    const services = document.querySelectorAll('.services-container');
    const button = document.querySelectorAll('.div-button');
    const doctor = document.querySelectorAll('.doctor-container');
    const opinions = document.querySelectorAll('.container-opinions');
    const partners = document.querySelectorAll('.container-partners');
    const facilities = document.querySelectorAll('.facilities-container');
    const banner = document.querySelectorAll('.banner-container');

    const elements = [
      ...services,
      ...doctor,
      ...opinions,
      ...partners,
      ...facilities,
      ...banner,
      ...button
    ];

    if (elements.length > 0) {
      const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
                }
         
        });
      }, { threshold: 0.2 });

      elements.forEach((element) => {
        myObserver.observe(element);
      });

      return () => {
        myObserver.disconnect();
      };
    }
  }, []);

  return (
    <>
      {navbar}
      <Banner />
      <Services />
      <Doctor />
      <Buttoneexplore namebutton="Explore more" />
      <Partners />
      <Facilities />
      <Opinion />
      <Footer />
    </>
  );
}

export default App;
