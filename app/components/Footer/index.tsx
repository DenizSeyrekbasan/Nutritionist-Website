import Image from "next/image";
import Link from "next/link";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const footer = () => {
  const text = "Merhaba, diyet programlarınız hakkında bilgi almak istiyorum ?";
  const whatsappLink = `https://api.whatsapp.com/send?phone=+905308511707&text=${encodeURIComponent(
    text
  )}`;
  const mailLink = `mailto:dyt.zehranazyolcu@gmail.com?subject=Konu&body=${encodeURIComponent(
    text
  )}`;

  return (
    <div className="bg-black" id="first-section">
      <div className="mx-auto max-w-2xl pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4">
            <h3 className="text-white text-5xl font-semibold leading-9 mb-4 lg:mb-10">
              {" "}
              Zehranaz Yolcu
            </h3>
            <div className="flex gap-4 mt-10">
              <div className="footer-icons">
                <Link
                  href="https://instagram.com/dyt.zehranazyolcu?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <Image
                    src={"/social-svg-icons/svg-instagram.svg"}
                    alt="zehranaz-yolcu"
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
                    src={"/social-svg-icons/svg-linkedin.svg"}
                    alt="zehranaz-yolcu"
                    width={30}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href={whatsappLink} target="_blank">
                  <Image
                    src={"/social-svg-icons/svg-whatsapp.svg"}
                    alt="zehranaz-yolcu"
                    width={30}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href={mailLink} target="_blank">
                  <Image
                    src={"/social-svg-icons/svg-mail.svg"}
                    alt="zehranaz-yolcu"
                    width={30}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2023 - Tüm hakları saklıdır - Zehranaz Yolcu
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
