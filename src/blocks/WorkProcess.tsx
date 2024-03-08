import style from '@/styles/modules/WorkProcess.module.scss';

const WorkProcess = ({ workProcess }) => {
  const { enable, title, subtitle, steps } = workProcess;

  if (!enable) return;

  return (
    <section className="pb-28">
      <div className="container">
        <div className="row mb-16 items-end">
          <div className="order-2 sm:col-7 sm:order-1">
            <h2 className="-mt-[6px] text-center font-secondary text-4xl font-medium sm:text-left md:text-5xl">
              {title}
            </h2>
          </div>
          <div className="order-1 mb-4 block text-center sm:col-5 sm:order-2 sm:mb-0 sm:text-right">
            <span className="font-secondary text-2xl leading-none text-white/75">
              {subtitle}
            </span>
          </div>
        </div>

        <div className={`${style['work-process']} row gy-6 md:gx-6`}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="md:col-6 lg:col-4"
              data-aos="fade-right"
              data-aos-delay={i * 100}
            >
              <div className={style['work-process-item']}>
                <h3 className="mb-6 flex items-center text-3xl">
                  <span className="font-secondary font-medium">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <span className="mx-4 font-secondary font-thin">—</span>
                  <span>{step.title}</span>
                </h3>
                <div className="text-lg font-light text-white/75">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
