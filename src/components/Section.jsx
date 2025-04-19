import { useInView } from "react-intersection-observer";

const Section = ({ id, title, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, //Trigger at 10% visibility
    triggerOnce: true,
  });

  const animateSection = inView ? 'animate' : '';


  return (
    <section className={`section section-${id}`} id={id}>
      <div ref={ref} className={`section__container section__container--${id}  section__container--${animateSection}`}>
        <h2 className={`heading-2 section__heading section__heading--${id}`}>
          {title}
        </h2>
        <div className={`section__content section__content--${id}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
