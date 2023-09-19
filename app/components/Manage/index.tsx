"use client";
import { useState } from "react";
import Slider from "react-slick";
import packets from "../../../data/packets/packets.json";

// const names = [
//   {
//     heading: "Sporcu Beslenmesi Danışmanlığı",
//     user: "per user, per yearly",
//     button: "İletişime geçin",
//     desc1: "Son 6 aya ait kan tahlilinin degerlendirilmesi",
//     desc2: "Yapılan spor dalına göre ideal yağ oranının kontrolü",
//     desc3:
//       "Antrenman ve kişiye özel hesaplamayla beslenme programının oluşturulması",
//     desc4: "",
//     desc5: "",
//     desc6: "",
//     category: "monthly",
//   },
//   {
//     heading: "Kilo Yönetimi Danışmanlığı",
//     user: "per user, per yearly",
//     button: "İletişime geçin",
//     desc1: "Son 6 aya ait kan tahlilinin değerlendirilmesi",
//     desc2: "Hedef ağırlığa ulaşma ve koruma eğitimi",
//     desc3: "Kişiye özel yasaksız beslenme programı oluşturulması",
//     desc4: "Düzenli tarti ve mezura olculerinin degerlendirilmesi",
//     desc5: "Kişiye özel beslenme tavsiyeleri/ Günlük destek ve takip",
//     desc6: "",
//     category: "monthly",
//   },
//   {
//     heading: "Kurumsal Beslenme Danışmanlığı",
//     user: "per user, per yearly",
//     button: "İletişime geçin",
//     desc1: "Sağlıklı Beslenme Eğitimleri",
//     desc2: "Kilo almanın altında yatan nedenlerin bulunması ve iyileştirilmesi",
//     desc3: "Aylık menü programlarının planlanması",
//     desc4: "Kurumdakilere özel beslenme danışmanlığı",
//     desc5: "Belirli aralıklarla besin tüketimi takibi",
//     desc6: "",
//     category: "monthly",
//   },
//   {
//     heading: "Hamilelik Dönemi ve Doğum Sonrası Beslenme Danışmanlığı",
//     user: "per user, per yearly",
//     button: "İletişime geçin",
//     desc1: "Düzenli periyotlarla beslenme ve ağırlık takibi",
//     desc2: "Bebeğin gelişimine özel beslenme programı",
//     desc3: "Doğum sonrası emzirme danışmanlığı eğitimi",
//     desc4: "",
//     desc5: "",
//     desc6: "",
//     category: "monthly",
//   },
//   {
//     heading: "Ek Gıdaya Geçiş ve Çocukluk Döneminde Beslenme Danışmanlığı",
//     user: "",
//     button: "İletişime geçin",
//     desc1: "6. aydan itibaren başlanan ek gıdanın aylara göre düzenlenmesi",
//     desc2: "Seçici beslenmenin önlenmesi için eğitim",
//     desc3:
//       "Çocukların büyüme ve gelişimini destekleyen beslenme programlarının oluşturulması",
//     desc4: "Günlük destek ve takip",
//     desc5: "",
//     desc6: "",
//     category: "monthly",
//   },
// ];

const Manage = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const [enabled, setEnabled] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState("monthly");

  // const toggleEnabled = () => {
  //   setEnabled(!enabled);
  //   setSelectedCategory(enabled ? "monthly" : "yearly");
  // };

  // const filteredData = packets.filter(
  //   (items) => items.category === selectedCategory
  // );

  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Danışmanlık Alanlarım
        </h3>

        {/* <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Free 15-day trial</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Unlimited Team Members</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Cancel Anytime</h4>
          </div>
        </div> */}

        {/* <div className="mt-6 relative">
          <div className="dance-text mb-5">get 3 months free</div>
          <Image
            src="/images/manage/toggle.svg"
            alt="toggle-image"
            width={24}
            height={24}
            className="toggleImage"
          />
          <div className="flex justify-center">
            <h3 className="text-sm font-medium mr-5">Billed Yearly</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className={`${
                enabled ? "bg-darkpurple" : "bg-darkpurple"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only text-black">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <h3 className="text-sm font-medium ml-5">Billed Monthly</h3>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {packets.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              {/* <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">
                ${items.price}
              </h2> */}
              {/* <p className="text-sm font-medium text-darkgrey mb-6">
                {items.user}
              </p> */}
              <button className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6">
                İletişime geçin
              </button>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                {items.desc1}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.desc2}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.desc3}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.desc4}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.desc5}
              </h3>
            </div>
          ))}
        </div>
        <div className="my-16 mx-5 gap-14 manage">
          <Slider {...settings}>
            {packets.map((items, i) => (
              <div
                className="manageTabs text-center p-10 bg-white ml-4"
                key={i}
              >
                <div className="mb-4">
                  <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
                  <button className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6">
                    İletişime geçin
                  </button>
                  <hr className="border-t border-darkgrey my-6" />
                  <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                    {items.desc1}
                  </h3>
                  <h3 className="text-sm font-medium text-darkgrey mb-3">
                    {items.desc2}
                  </h3>
                  <h3 className="text-sm font-medium text-darkgrey mb-3">
                    {items.desc3}
                  </h3>
                  <h3 className="text-sm font-medium text-darkgrey mb-3">
                    {items.desc4}
                  </h3>
                  <h3 className="text-sm font-medium text-darkgrey mb-3">
                    {items.desc5}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Manage;
