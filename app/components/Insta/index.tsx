import Image from "next/image";
import Link from "next/link";

const Insta = () => {
  return (
    <div id="insta-section">
      <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="mx-auto imageContainer sm:mt-40 mt-50">
            <Image
              src="/insta/IMG_8759.jpg"
              width={306}
              height={306}
              alt="zehranaz-yolcu"
            />
            <Link
              href={
                "https://www.instagram.com/p/Cx2ZKfuoX1D/?igshid=MzRlODBiNWFlZA=="
              }
              target="_blank"
            >
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
              >
                <Image
                  src="/images/insta/instagram.svg"
                  alt="zehranaz-yolcu"
                  width={36}
                  height={36}
                />
              </button>
            </Link>
          </div>

          <div className="mx-auto imageContainer sm:mt-40 mt-50">
            <Image
              src="/insta/IMG_LAST_jpg.jpg"
              width={306}
              height={306}
              alt="zehranaz-yolcu"
            />
            <Link
              href={
                "https://www.instagram.com/reel/CxnORiqIa2f/?igshid=MzRlODBiNWFlZA=="
              }
              target="_blank"
            >
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
              >
                <Image
                  src="/images/insta/instagram.svg"
                  alt="zehranaz-yolcu"
                  width={36}
                  height={36}
                />
              </button>
            </Link>
          </div>

          <div className="mx-auto imageContainer sm:mt-40 mt-50">
            <Image
              src="/insta/IMG_1012.JPG"
              width={306}
              height={306}
              alt="zehranaz-yolcu"
            />
            <Link
              href={"https://www.instagram.com/dyt.zehranazyolcu/"}
              target="_blank"
            >
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
              >
                <Image
                  src="/images/insta/instagram.svg"
                  alt="zehranaz-yolcu"
                  width={36}
                  height={36}
                />
              </button>
            </Link>
          </div>

          <div className="mx-auto imageContainer sm:mt-40 mt-50">
            <Image
              src="/insta/IMG_7088.jpg"
              width={306}
              height={306}
              alt="zehranaz-yolcu"
            />
            <Link
              href={
                "https://www.instagram.com/p/CuPo0hBIgtW/?igshid=MzRlODBiNWFlZA=="
              }
              target="_blank"
            >
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
              >
                <Image
                  src="/images/insta/instagram.svg"
                  alt="zehranaz-yolcu"
                  width={36}
                  height={36}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insta;
