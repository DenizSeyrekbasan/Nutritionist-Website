"use client";
import { useState } from "react";
import Slider from "react-slick";
import packets from "../../../data/packets/packets.json";
import Link from "next/link";

const Manage = () => {
  const text = "Merhaba, diyet programlarınız hakkında bilgi almak istiyorum ?";
  const whatsappLink = `https://api.whatsapp.com/send?phone=+905308511707&text=${encodeURIComponent(
    text
  )}`;
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1800,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Danışmanlık Alanlarım
        </h3>

        <Slider {...settings}>
          {packets.map((items, i) => (
            <div className="manageTabs text-center p-10 mt-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <button className="text-base font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6">
                <Link href={whatsappLink} target="_blank">
                  İletişime geçin
                </Link>
              </button>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-base font-medium text-darkgrey mb-3 mt-6">
                {items.desc1}
              </h3>
              <h3 className="text-base font-medium text-darkgrey mb-3">
                {items.desc2}
              </h3>
              <h3 className="text-base font-medium text-darkgrey mb-3">
                {items.desc3}
              </h3>
              <h3 className="text-base font-medium text-darkgrey mb-3">
                {items.desc4}
              </h3>
              <h3 className="text-base font-medium text-darkgrey mb-3">
                {items.desc5}
              </h3>
              <h3 className="text-base font-medium text-darkgrey mb-3">
                {items.desc6}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Manage;
