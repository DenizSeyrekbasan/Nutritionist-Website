'use client'
import Lottie from "lottie-react";
import AnimationData from "../../../public/lottie/bannerLottie.json";
import Image from "next/image";

const Banner = () => {
  const heroAnimationOptions = {
    speed:0.5,
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mx-auto max-w-7xl my-10  px-6 lg:px-8 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
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
            <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
              <a href="#dedicated-section">Hakkımda</a>
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-30 lg:block text-right">
          {/* <Image
            src="/banner-bg-2.jpg"
            alt="zehranaz-yolcu"
            width={300}
            height={90}
          /> */}
          <Lottie {...heroAnimationOptions} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
