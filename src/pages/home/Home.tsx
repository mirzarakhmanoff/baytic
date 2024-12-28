import Slider from "react-slick";
import bg1 from "../../assets/image.png";
import bg2 from "../../assets/image copy.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/header/Header";
import DropDown from "../../components/dropdown/Dropdown";
import ProductCarousel from "../../components/products/Products";
import HeroSection from "../../components/hero/Hero";
import ProductShowcase from "../../components/posterSlider/PosterSlider";

const Home = () => {
  const backgrounds = [bg1, bg2];

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    fade: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative h-screen w-screen ">
      <Header />
      <DropDown />

      <Slider {...sliderSettings}>
        {backgrounds.map((bg, index) => (
          <div key={index}>
            <div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="flex items-center justify-center  flex-col h-screen bg-black bg-opacity-50">
                <h2 className="text-4xl font-bold text-white shadow-lg">
                  KELSO
                </h2>
                <span className="text-xl font-serif text-white shadow-md mt-2">
                  Dark Brown Suede
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <ProductCarousel />
      <HeroSection />
      <ProductShowcase />
    </div>
  );
};

export default Home;
