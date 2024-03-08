import config from '@/config/site.config.json';

import Markdown from '@/components/ReactMarkdown';
import style from '@/styles/modules/Banner.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Banner = ({ banner }) => {
  const bannerBgText = config.settings.bannerBgText;
  const { first_name, last_name, bg_text, description, image } = banner;

  const [isLoading, setLoading] = useState(true);
  const textEl = useRef();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleBannerScroll = () => {
      if (textEl.current !== null) {
        const scrollValue = window.scrollY;
        textEl.current.style.opacity = (1000 - scrollValue) / 1000;
        textEl.current.style.transform = `translateX(-${scrollValue}px)`;
      }
    };

    window.addEventListener('scroll', handleBannerScroll);
  }, [textEl]);

  return (
    <section className={`banner ${style.banner}`}>
      <div className={style['bg-text']} ref={textEl}>
        {bannerBgText && (
          <div data-aos="fade-in">
            <span>{bg_text}</span>
          </div>
        )}
      </div>

      <div className="container h-full">
        <div className="row h-full items-center">
          <div className={`col-12 text-center`}>
            <div className="relative mx-auto mb-6 inline-block md:hidden">
              <div className="mx-5 overflow-hidden rounded-full bg-[#E3DFDC]">
                <Image
                  className="mx-auto"
                  src={image}
                  alt={first_name + last_name}
                  height={150}
                  width={150}
                  data-aos="slide-up"
                  data-aos-duration="500"
                  data-aos-delay="150"
                />
              </div>
            </div>
            <h1
              className={`${style.name} flex-wrap items-center justify-center font-secondary md:flex`}
              data-aos="fade-up-sm"
            >
              <span className="mx-2 inline-block md:mx-0">
                <Markdown content={first_name} inline={true} />
              </span>
              <div className="relative my-4 hidden md:my-0 md:block">
                <div className="mx-5 overflow-hidden rounded-full bg-[#E3DFDC]">
                  <Image
                    className="mx-auto"
                    src={image}
                    alt={first_name + last_name}
                    height={150}
                    width={150}
                    data-aos="slide-up"
                    data-aos-duration="500"
                    data-aos-delay="150"
                  />
                </div>
              </div>
              <span className="mx-2 inline-block md:mx-0">
                <Markdown content={last_name} inline={true} />
              </span>
            </h1>
            <div
              className="mx-auto mt-5 font-light opacity-80 md:mt-8 md:max-w-xl md:text-xl"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              <Markdown content={description} inline={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
