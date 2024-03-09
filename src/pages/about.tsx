import Layout from '@/components/layout';
import PageHeader from '@/components/page-header';
import Markdown from '@/components/react-markdown';
import { getSinglePage } from '@/libs/getSinglePage';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// @ts-ignore
const About = ({ aboutPage }) => {
  const { title, subtitle, about, whatClientsSay } = aboutPage.frontMatter;

  const [randomNumbers, setRandomNumbers] = useState<any>([]);

  useEffect(() => {
    const generateUniqueRandomNumbers = () => {
      const numbers: any[] = [];
      const min = -6;
      const max = 6;
      while (numbers.length < about.images.length) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      setRandomNumbers(numbers);
    };
    generateUniqueRandomNumbers();
  }, [about.images]);

  // Swap Images
  const imageRef = useRef(null);
  const imageIndexRef = useRef(0);

  const swapImages = () => {
    // @ts-ignore
    const { children } = imageRef.current;
    const lastIndex = children.length - 1;
    const previousIndex = imageIndexRef.current;

    const nextIndex = previousIndex === 0 ? lastIndex : previousIndex - 1;

    for (let i = 0; i < children.length; i++) {
      children[i].style.zIndex = i === nextIndex ? 99 : 0;
    }

    imageIndexRef.current = nextIndex;
  };

  // Rotate Icon & Swap Images
  const [rotate, setRotate] = useState(0);
  const handleClick = () => {
    setRotate(rotate + 360);
    swapImages();
  };

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="bg-white py-28 text-dark">
        <div className="container">
          <div className="row items-center justify-center">
            <div
              className="col-10 mb-16 md:col-6 lg:col-4 lg:mb-0"
              data-aos="fade-up-sm"
            >
              <div
                ref={imageRef}
                onClick={() => handleClick()}
                className="relative z-10 mx-8 cursor-pointer transition-transform duration-300 ease-out hover:scale-105"
              >
                {/* @ts-ignore */}
                {about.images.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-transform ${index !== 0 ? `absolute left-0 top-0` : 'relative'}`}
                    style={{
                      zIndex: -index,
                      transform: `rotate(${randomNumbers[index]}deg)`,
                    }}
                  >
                    <Image
                      src={item}
                      alt="Image"
                      width={500}
                      height={607}
                      className="rounded-lg bg-light/10"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="text-center md:col-10 lg:col-5 lg:text-left"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              <div className="flex flex-col pl-0 lg:pl-8">
                <div className="order-2 mb-0 mt-10 lg:order-1 lg:mb-10 lg:mt-0">
                  <p className="mb-4 text-2xl leading-snug">{about.title}</p>
                  <div className="text-black/75">
                    <Markdown content={about.description} inline={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-b-2xl  py-28 " data-aos="fade-in">
        <div className="container">
          <div className="row mb-16 items-end">
            <div className="col-12 text-center">
              <span className="mb-4 block font-secondary text-2xl leading-none text-white/75">
                {whatClientsSay.subtitle}
              </span>
              <h2 className="-mt-[6px] font-secondary text-4xl font-medium md:text-5xl">
                {whatClientsSay.title}
              </h2>
            </div>
          </div>
          <div className="row justify-center">
            <div className="lg:col-8">
              <div className="relative text-center md:px-20">
                <Swiper
                  modules={[Navigation, Autoplay, A11y]}
                  slidesPerView={1}
                  loop={true}
                  speed={500}
                  autoHeight={true}
                  navigation={{
                    nextEl: '.slide-next',
                    prevEl: '.slide-prev',
                  }}
                >
                  {/* @ts-ignore */}
                  {whatClientsSay.reviewsItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="text-center">
                        <div className="mb-4 rounded-lg bg-light/10 px-5 py-8 text-left text-lg md:px-10">
                          <Markdown content={item.review} inline={false} />
                        </div>
                        <p className="mb-1 text-2xl font-medium">{item.name}</p>
                        <p className="text-white/75">{item.info}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className="slide-prev left-0 top-1/2 mt-14 -translate-y-1/2 px-3 md:absolute md:mt-0 md:px-0"
                  title="Slide Prev"
                >
                  <Image
                    className="inline-block rotate-180 "
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    height={31}
                    width={39}
                  />
                </button>
                <button
                  className="slide-next right-0 top-1/2 mt-14 -translate-y-1/2 px-3 md:absolute md:mt-0 md:px-0"
                  title="Slide Next"
                >
                  <Image
                    className="inline-block "
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    height={31}
                    width={39}
                    color="white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

// Export Props
export const getStaticProps = () => {
  const about = getSinglePage('./src/content/about.md');

  return {
    props: {
      aboutPage: about,
    },
  };
};
