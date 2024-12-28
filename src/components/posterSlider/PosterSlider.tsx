import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import product1 from "../../assets/image copy 2.png";
import product2 from "../../assets/image copy 2.png";

// Пример данных
const products = [
  {
    title: "Highbury 2",
    description: "DARK BROWN CALF SUEDE",
    details:
      "The only style to featuring in SKYFALL, SPECTRE and NO TIME TO DIE, HIGHBURY is the perfect style to celebrate the 60th anniversary of GOLDFINGER.",
    collection: "GOLDFINGER COLLECTION",
    imgSrc: product1,
  },
  {
    title: "Oxford 1",
    description: "BLACK CALF LEATHER",
    details:
      "A timeless classic, Oxford 1 is a versatile option for formal and semi-formal attire.",
    collection: "TIMELESS ELEGANCE COLLECTION",
    imgSrc: product2,
  },
];

// Кастомные стрелки
const PrevArrow = ({ onClick }: any) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow cursor-pointer hover:bg-gray-300 z-10"
    onClick={onClick}
  >
    <FaChevronLeft className="text-black text-lg" />
  </div>
);

const NextArrow = ({ onClick }: any) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow cursor-pointer hover:bg-gray-300 z-10"
    onClick={onClick}
  >
    <FaChevronRight className="text-black text-lg" />
  </div>
);

const ProductShowcase = () => {
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="bg-white py-16 px-8">
      <Slider {...sliderSettings}>
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            {/* Текстовая часть */}
            <div className="lg:w-1/2 px-8">
              <h3 className="text-xl italic font-serif text-gray-500 mb-2">
                {product.title}
              </h3>
              <h4 className="text-2xl font-bold text-black mb-4 uppercase">
                {product.description}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.details}
              </p>
              <a
                href="#"
                className="text-black uppercase font-medium tracking-wide border-b-2 border-black hover:text-gray-700 hover:border-gray-700 transition"
              >
                {product.collection} &rarr;
              </a>
            </div>

            {/* Визуальная часть */}
            <div className="relative flex items-center justify-center">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="rounded-lg shadow-lg object-cover w-[80%] lg:w-[70%] top-0 left-0"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductShowcase;
