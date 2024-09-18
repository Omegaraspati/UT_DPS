
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Header from "./components/Header";
import FormDaftar from "./components/FormDaftar";
import VideoGrid from "./components/VideoGrid";
import BgImage from "./components/BgImage";
import CarouselGallery from "./components/CarouselGallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <TopNav/>
    <Navbar/>
    <Carousel/>
    <Card/>
    <Header/>
    <FormDaftar/>
    <VideoGrid/>
    <BgImage/>
    <CarouselGallery/>
    <Footer/>
    </>
  );
}
