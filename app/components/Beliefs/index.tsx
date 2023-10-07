const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      <div className="bg-build pt-12 px-5 sm:px-24 pb-52 md:pb-70 rounded-3xl">
        <p className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
          Online Beslenme Danışmanlığı:{" "}
          <span className="text-blue">
            Sağlıklı Yaşam Tarzını Destekleyen Dijital Rehberlik
          </span>
        </p>
        <p className="text-2xl pt-2 mb-3 text-center sm:text-start flex items-center">
          Online beslenme danışmanlığı ile dilediğiniz zaman yanınızdayım.{" "}
          {/* <img
            className="ml-3"
            src="/images/icons/critical.png"
            alt="zehranaz-yolcu"
            width={50}
          /> */}
        </p>
        <p className="text-2xl pt-2 mb-3 text-center sm:text-start">
          Benimle beraber sürece başlamaya karar verdiğiniz takdirde sizlere bir
          anamnez formu iletiyorum.
          <br /> Bu form beslenme alışkanlıklarınızı ve sizleri daha iyi
          tanımama olanak sağlıyor.
        </p>
        <div className="text-2xl pt-2 mb-3 text-center sm:text-start">
          <div className="flex items-center">
            <img
              className="order-first mr-4"
              src="/icons8-green-apple-48.png"
              alt="zehranaz-yolcu"
              width={40}
            />
            Beraber belirlediğimiz gün ve saatte dilediğiniz iletişim kanalı
            üzerinden size özel ilk listemizi oluşturuyoruz.{""}
          </div>{" "}
          <div className="flex items-center mt-5">
            <img
              className="order-first mr-4"
              src="/icons8-green-apple-48.png"
              alt="zehranaz-yolcu"
              width={40}
            />
            Haftalık görüşmelerimizle süreci değerlendiriyoruz. İstek ve
            hedeflerimiz doğrultusunda listemizi güncelliyoruz.
          </div>{" "}
          <div className="flex items-center mt-5">
            <img
              className="order-first mr-4"
              src="/icons8-green-apple-48.png"
              alt="zehranaz-yolcu"
              width={40}
            />
            Danışmanlık yaptığım süre boyunca sorularınıza anlık cevap verebilir
            ve sorunlarınıza çözüm üretebilirim.
          </div>
        </div>
        <div className="text-2xl pt-2 mb-5 text-center sm:text-start flex items-center">
          Yasaksız ilerdiğimiz bu süreçte tek yapmanız gereken benimle iletişime
          geçmek
          <img
            className="ml-3"
            src="/images/icons/happy.png"
            alt="zehranaz-yolcu"
            width={25}
          />
        </div>
        <div className="text-2xl pt-2 text-center sm:text-start">
          <span className="font-black">Peki Süreç Nasıl İlerliyor ?</span>
        </div>
        <h4 className="text-2xl pt-4 mb-5 text-center sm:text-start">
          <div className="flex items-center">
            Tahlil Değerlendirmesi
            <img
              className="order-first mr-4"
              src="/images/icons/test.png"
              alt="zehranaz-yolcu-test"
              width={40}
            />
          </div>
          <div className="flex items-center pt-2">
            Spor ve Egzersiz Tavsiyeleri{" "}
            <img
              className="order-first mr-4"
              src="/images/icons/yoga.png"
              alt="zehranaz-yolcu-yoga"
              width={40}
            />
          </div>
          <div className="flex items-center pt-2">
            Beslenme Eğitimi
            <img
              className="order-first mr-4"
              src="/images/icons/diet.png"
              alt="zehranaz-yolcu-diet"
              width={40}
            />
          </div>
          <div className="flex items-center pt-2">
            Takip{" "}
            <img
              className="order-first mr-4"
              src="/images/icons/support.png"
              alt="zehranaz-yolcu-follow"
              width={40}
            />
          </div>
          <div className="flex items-center pt-2">
            Hedefe Ulaşma{" "}
            <img
              className="order-first mr-4"
              src="/images/icons/target.png"
              alt="zehranaz-yolcu-target"
              width={40}
            />
          </div>
        </h4>
        {/* <div className="text-center sm:text-start">
          <button className=" text-xl py-5 px-14 mt-8 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
            Whatsapp
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Beliefs;
