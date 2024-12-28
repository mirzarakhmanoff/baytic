import imageCopy from "../../assets/image copy 2.png";
const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${imageCopy})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-4">
          Historic & Iconic
        </h2>
        <h3 className="text-xl md:text-2xl uppercase font-semibold mb-6">
          British Alliance
        </h3>
        <p className="text-base md:text-lg mb-8 leading-relaxed">
          An iconic combination of Britishness, through his character and
          clothing, continues to inspire. Following its recent announcement as a
          continued official partner and provider of footwear to James Bond, two
          new styles have been created.
        </p>
        <button className="px-8 py-3 text-sm md:text-base font-semibold bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition">
          Watch The Film
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
