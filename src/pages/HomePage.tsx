import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SliderPage from '../components/SliderPage';
import BestDestination from '../components/home/BestDestnation';
import HorizontalBar from '../components/home/HorizontalBar';
import LatestNews from '../components/home/LatestNews';
import TourPackages from '../components/home/TourPackages';
import "./Home.css";


const HomePage = () => {
  return (
    <>
    <Hero/>
    <BestDestination/>
    <LatestNews/>
    <HorizontalBar/>
    <TourPackages/>
    <Footer/>

    </>
    
  )
}

export default HomePage