import Image from "next/image";
import Link from "next/link";

const Dedicated = () => {
  const text = "Merhaba, diyet programlarınız hakkında bilgi almak istiyorum ?";
  const whatsappLink = `https://api.whatsapp.com/send?phone=+905308511707&text=${encodeURIComponent(
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

        <div className="mx-auto max-w-7xl  my-40 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 my-16">
            {/* COLUMN-1 */}
            <div>
              <Image
                src="/zehranazyolcu-png.png"
                alt="zehranazyolcu"
                width={416}
                height={530}
                className="mx-auto md:mx-0 custom-rounded"
                style={{
                  maxWidth: "416px",
                  width: "90%",
                }}
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
                Merhaba, ben Zehranaz Yolcu
              </h2>
              <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start m-2">
                Beslenme ve sağlıklı yaşam konularına olan ilgim ve tutkum
                sayesinde aldığım eğitimle beslenme alanında geniş bir bilgi ve
                deneyime sahip oldum.
              </p>
              <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start m-2">
                Amacım, insanların sağlıklı beslenme alışkanlıkları
                geliştirmelerine yardımcı olarak yaşam kalitelerini
                artırmalarına destek olmak.
              </p>
              <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start m-2">
                Hizmetlerim ve uzmanlığım hakkında daha fazla bilgi edinmek için
                iletişime geçmeyi unutmayın.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
                <div className="footer-icons">
                  <Link
                    href="https://instagram.com/dyt.zehranazyolcu?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <Image
                      src={"images/social-icons/instagram.svg"}
                      alt="instagram"
                      width={30}
                      height={20}
                    />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link
                    href="https://tr.linkedin.com/in/zehranaz-yolcu-51437b267"
                    target="_blank"
                  >
                    <Image
                      src={"images/social-icons/linkedin.svg"}
                      alt="linkedin"
                      width={30}
                      height={20}
                    />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href={whatsappLink} target="_blank">
                    <Image
                      src={"images/social-icons/whatsapp.svg"}
                      alt="whatsapp"
                      width={30}
                      height={20}
                    />
                  </Link>
                </div>
                <div className="footer-icons">
                  <Link href={mailLink} target="_blank">
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
