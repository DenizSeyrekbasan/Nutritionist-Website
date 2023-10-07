import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Hakkımda", href: "#dedicated-section", current: true },
  { name: "Paketler", href: "#services-section", current: false },
  { name: "SSS", href: "#faq-section", current: false },
  { name: "Instagram", href: "#insta-section", current: false },
  // { name: 'Blog', href: '#blog-section', current: false },
  // { name: 'Testimonial', href: '#testimonial-section', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const text = "Merhaba, diyet programlarınız hakkında bilgi almak istiyorum ?";
  const whatsappLink = `https://api.whatsapp.com/send?phone=+905308511707&text=${encodeURIComponent(
    text
  )}`;
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}

            <a href={whatsappLink} target="_blank">
              <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                Whatsapp
              </button>
            </a>
            {/* <Contactusform /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
