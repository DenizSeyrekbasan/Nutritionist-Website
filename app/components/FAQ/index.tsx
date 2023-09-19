"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">SSS</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Sık Sorulan <br /> Sorular
      </h2>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span> Online görüşmeler nasıl oluyor ?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Online diyet, bireylerin internet üzerinden diyet
                  danışmanlarıyla iletişim kurarak kişiselleştirilmiş beslenme
                  planları ve rehberlik almasını sağlayan bir hizmettir
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>
                    Hangi besin gruplarını içeren bir diyet programı
                    öneriyorsunuz?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Sağlıklı bir diyet programı genellikle tüm besin gruplarını
                  içermelidir. Dengeli bir yaklaşım, proteinler,
                  karbonhidratlar, yağlar, vitaminler ve mineraller açısından
                  zengin bir beslenmeyi hedefler. Örneğin, tam tahıllar,
                  sebzeler, meyveler, protein kaynakları (tavuk, balık,
                  baklagiller) ve sağlıklı yağlar (zeytinyağı, avokado) içeren
                  bir diyet önerilebilir.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>
                    Hızlı kilo vermek için en etkili stratejiler nelerdir?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Hızlı kilo vermek yerine sağlıklı ve sürdürülebilir bir kilo
                  verme hedeflemek önemlidir. Ani kilo kaybı genellikle vücut
                  için zararlı olabilir. Sağlıklı kilo vermek için porsiyon
                  kontrolü, düzenli egzersiz, su tüketimi artırma, işlenmiş
                  gıdalardan kaçınma ve uzun vadeli beslenme alışkanlıklarını
                  geliştirmek önerilir. Kısa vadeli çözümler yerine yaşam tarzı
                  değişiklikleri daha etkili sonuçlar doğurabilir.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span> Anamnez formu nedir ? Neden Gereklidir ?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  hasta veya müşterinin sağlık durumu, tıbbi geçmişi,
                  semptomları ve tedavi ihtiyaçları hakkında önemli bilgileri
                  toplamak için kullanır. Anamnez formu, sağlık geçmişini daha
                  iyi anlamak, doğru bir teşhis koymak ve uygun tedaviyi
                  sağlamak için kullanılır.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span> Kan Tahlili Neden Gereklidir ?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Online diyet, bireylerin internet üzerinden diyet
                  danışmanlarıyla iletişim kurarak kişiselleştirilmiş beslenme
                  planları ve rehberlik almasını sağlayan bir hizmettir
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
