import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Features from './components/Features';
import Water from './components/Water';
import Footer from './components/Footer';
import Email from './components/Email';
import Memories from './components/Memories';
import Travellers from './components/Travellers'
import Earth from './components/Earth';
import Customerslider from './components/Customerslider';
import Preloader from './components/Preloader';
import Backtop from './components/Backtop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init(
      {
        duration:1500,
        once:true,
      }
    );
  }, [])
  return (
    <>
  <Header/>
  <Tabs/>
  <Features/>
  <Water/>
  <Earth/>
  <Travellers/>
  <Customerslider/>
  <Memories/>
  <Email/>
  <Footer/>
  <Preloader/>
  <Backtop/>
    </>
  );
}

export default App;
