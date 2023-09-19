import Image from "next/image";
import Link from "next/link";

const Dedicated = () => {
  const text = "Merhaba, diyet programlarınız hakkında bilgi almak istiyorum ?";
  const whatsappLink = `https://api.whatsapp.com/send?phone=5308511707&text=${encodeURIComponent(
    text
  )}`;

  const mailLink = `mailto:dyt.zehranazyolcu@gmail.com?subject=Konu&body=${encodeURIComponent(
    text
  )}`;

  return (
    <div id="dedicated-section">
      <div className="relative">
        <Image
          src="/images/dedicated/spiral.svg"
          height={272}
          width={686}
          alt="spiral-design"
          className="absolute left-0 hidden lg:block -z-10"
        />

        <div className="mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 my-16">
            {/* COLUMN-1 */}
            <div>
              <Image
                src="/images/aboutus/zehranazyolcu.jpg"
                alt="zehranazyolcu"
                width={416}
                height={530}
                className="mx-auto md:mx-0"
              />
            </div>

            {/* COLUMN-2 */}
            <div className="relative">
              <Image
                src="images/dedicated/comma.svg"
                alt="comma-image"
                width={200}
                height={106}
                className="absolute comma-pos hidden lg:block"
              />
              <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
                Merhaba, ben Zehranaz Yolcu,
              </h2>
              <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                Beslenme ve sağlıklı yaşam konularına olan ilgim ve tutkum
                sayesinde aldığım eğitimle beslenme alanında geniş bir bilgi ve
                deneyime sahip oldum.
              </p>
              <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                Amacım, insanların sağlıklı beslenme alışkanlıkları
                geliştirmelerine yardımcı olarak yaşam kalitelerini
                artırmalarına destek olmak.
              </p>
              <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                Hizmetlerim ve uzmanlığım hakkında daha fazla bilgi edinmek için
                iletisime gecmeyi unutmayın.
              </p>
              {/* <p className="text-2xl font-semibold mt-12 lg:ml-32  text-center lg:text-start">
              {" "}
              Cathy Hills, CEO
            </p> */}
              <div className="flex gap-4 mt-5">
                <div className="footer-icons">
                  <Link href="https://instagram.com/dyt.zehranazyolcu?igshid=MzRlODBiNWFlZA==">
                    <Image
                      src={"images/social-icons/instagram.svg"}
                      alt="instagram"
                      width={30}
                      height={20}
                    />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href="https://tr.linkedin.com/in/zehranaz-yolcu-51437b267">
                    <Image
                      src={"images/social-icons/linkedin.svg"}
                      alt="linkedin"
                      width={30}
                      height={20}
                    />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href={whatsappLink}>
                    <Image
                      src={"images/social-icons/whatsapp.svg"}
                      alt="whatsapp"
                      width={30}
                      height={20}
                    />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href={mailLink}>
                    <Image
                      src={"images/social-icons/mail.svg"}
                      alt="mail"
                      width={30}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
