import Footer from '../components/Footer';
import SliderPage from '../components/SliderPage';
import BestDestination from '../components/home/BestDestnation';
import HorizontalBar from '../components/home/HorizontalBar';
import LatestNews from '../components/home/LatestNews';
import TourPackages from '../components/home/TourPackages';
import "./Home.css";


const HomePage = () => {
  return (
    <>
    <SliderPage/>
    <BestDestination/>
    <LatestNews/>
    <HorizontalBar/>
    <TourPackages/>
    <Footer/>

    </>
    
  )
}

export default HomePage