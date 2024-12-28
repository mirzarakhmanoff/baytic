import Slider from "react-slick";
import { Button } from "antd";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import photo1 from "../../assets/Снимок экрана 2024-12-13 в 10.01.31.png";
import photo2 from "../../assets/Снимок экрана 2024-12-13 в 10.01.37.png"; // Пример второго изображения для hover эффекта

// Пример данных о товарах
const products = [
  {
    title: "Card Holder",
    description: "Tan Willow Grain",
    imgSrc: photo1,
    hoverImgSrc: photo2,
  },
  {
    title: "Billfold Wallet",
    description: "Black Calf",
    imgSrc: photo1,
    hoverImgSrc: photo2,
  },
  {
    title: "Billfold Wallet",
    description: "Burgundy Cordovan",
    imgSrc: photo1,
    hoverImgSrc: photo2,
  },
  {
    title: "Billfold Wallet",
    description: "Dark Brown Rough-Out Suede",
    imgSrc: photo1,
    hoverImgSrc: photo2,
  },
  {
    title: "Billfold Wallet",
    description: "Whisky Cordovan",
    imgSrc: photo1,
    hoverImgSrc: photo2,
  },
];

const PrevArrow = ({ onClick }: any) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg cursor-pointer z-10 hover:bg-gray-800 transition duration-300"
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </div>
);

const NextArrow = ({ onClick }: any) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg cursor-pointer z-10 hover:bg-gray-800 transition duration-300"
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </div>
);

const ProductCarousel = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-8 bg-gray-100 relative">
      <div className="text-center mb-10">
        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          New Collection
        </span>
        <h3 className="text-3xl font-extrabold text-gray-800 mt-2">
          LEATHER GOODS
        </h3>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          For the first time in its 145-year history, Crockett & Jones offers a
          curated selection of complementary leather goods to sit alongside its
          collection of fine Goodyear-welted shoes and boots.
        </p>
        <div className="text-center mt-8">
          <Button
            type="text"
            className="border-2 border-black rounded-lg text-black py-2 px-6 hover:bg-black hover:text-white transition-colors duration-300"
          >
            View Collection
          </Button>
        </div>
      </div>
      <Slider {...sliderSettings}>
        {products.map((product, index) => (
          <div
            key={index}
            className="p-4 transition-all duration-300 transform hover:shadow-xl hover:rounded-xl w-[250px]"
          >
            <div className="relative group">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-[300px] rounded-lg transition-all object-cover duration-300 group-hover:opacity-80"
              />
              <img
                src={product.hoverImgSrc}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
