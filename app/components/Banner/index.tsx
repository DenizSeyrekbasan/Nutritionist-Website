import Lottie from "react-lottie";
import animationData from "../../../public/lottie/animation_lmg3449x.json";
import Image from "next/image";


const Banner = () => {
  const heroAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center lg:text-start">
            {/* <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              DESIGN AGENCY
            </button> */}
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-6xl lg:text-80xl font-bold text-darkpurple">
              Diyetisyen <br />
              Zehranaz Yolcu
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start">
            <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue" >
              Hakkımda 
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-30 lg:pt-20 hidden lg:block ">
          {/* <Image
            src="/images/banner/banner-ex.webp"
            alt="hero-image"
            width={550} 
            height={400}
          /> */}
          {/* <Lottie speed={0.5} options={heroAnimationOptions} /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
