const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
        {/* <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
          BUILD
        </h2> */}
        <h4 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
          "Online Beslenme Danışmanlığı:{" "}
          <span className="text-blue">
            Sağlıklı Yaşam Tarzını Destekleyen Dijital Rehberlik"
          </span>
        </h4>
        <h4 className="text-2xl pt-2 mb-5 text-center sm:text-start flex items-center">
          Online beslenme danışmanlığı ile dilediğiniz zaman yanınızdayım{" "}
          <img
            className="ml-3"
            src="/images/icons/critical.png"
            alt="zehranaz-yolcu"
            width={50}
          />
        </h4>
        <h4 className="text-2xl pt-2 mb-5 text-center sm:text-start">
          Benimle beraber sürece başlamaya karar verdiğiniz takdirde sizlere bir
          anamnez formu iletiyorum. Bu form beslenme alışkanlıklarınızı ve
          sizleri daha iyi tanımama olanak sağlıyor.
        </h4>
        <h4 className="text-2xl pt-2 mb-5 text-center sm:text-start">
          <div className="flex items-center">
            <img
              className="order-first mr-2"
              src="/images/icons/number-one.png"
              alt="zehranaz-yolcu"
              width={30}
            />
            Beraber belirlediğimiz gün ve saatte dilediğiniz iletişim kanalı
            üzerinden size özel ilk listemizi oluşturuyoruz.{""}
          </div>{" "}
          <div className="flex items-center">
            <img
              className="order-first mr-2"
              src="/images/icons/number-2.png"
              alt="zehranaz-yolcu"
              width={30}
            />
            Haftalık görüşmelerimizle süreci değerlendiriyoruz. İstek ve
            hedeflerimiz doğrultusunda listemizi güncelliyoruz.
          </div>{" "}
          <div className="flex items-center">
            <img
              className="order-first mr-2"
              src="/images/icons/number-3.png"
              alt="zehranaz-yolcu"
              width={30}
            />
            Danışmanlık yaptığım süre boyunca sorularınıza anlık cevap verebilir
            ve sorunlarınıza çözüm üretebilirim.
          </div>
        </h4>
        <h4 className="text-2xl pt-2 mb-5 text-center sm:text-start flex items-center">
          <span className="font-black mr-2">Yasaksız </span> ilerdiğimiz bu
          süreçte tek yapmanız gereken benimle iletişime geçmek
          <img
            className="ml-3"
            src="/images/icons/happy.png"
            alt="zehranaz-yolcu"
            width={25}
          />
        </h4>
        <h4 className="text-2xl pt-2 text-center sm:text-start">
          <span className="font-black">Peki Süreç Nasıl İlerliyor ?</span>
        </h4>
        <h4 className="text-2xl pt-4 mb-5 text-center sm:text-start">
          <div className="flex items-center">
            Tahlil Değerlendirmesi
            <img
              className="order-first mr-2"
              src="/images/icons/test.png"
              alt="zehranaz-yolcu"
              width={30}
            />
          </div>
          <div className="flex items-center pt-4">
            Özel Spor ve Egzersiz Tavsiyeleri{" "}
            <img
              className="order-first mr-2"
              src="/images/icons/yoga.png"
              alt="zehranaz-yolcu"
              width={30}
            />
          </div>
          <div className="flex items-center pt-4">
            Beslenme Eğitimi
            <img
              className="order-first mr-2"
              src="/images/icons/diet.png"
              alt="zehranaz-yolcu"
              width={30}
            />
          </div>
          <div className="flex items-center pt-4">
            Takip{" "}
            <img
              className="order-first mr-2"
              src="/images/icons/support.png"
              alt="zehranaz-yolcu"
              width={30}
            />
          </div>
          <div className="flex items-center pt-4">
            Hedefe Ulaşma{" "}
            <img
              className="order-first mr-2"
              src="/images/icons/target.png"
              alt="zehranaz-yolcu"
              width={30}
            />
          </div>
        </h4>
        {/* <div className="text-center sm:text-start">
          <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
            Learn more
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Beliefs;
