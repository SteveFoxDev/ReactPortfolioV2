import Section from './Section';
import '../scss/components/About.scss';

const About = () => {
  return (
    <Section id='about' title='About Me' >
      <div className='info'>
        <h3 className='heading-3 info--heading-2'>
          Hi, I&apos;m <span className='info__name'>Steve Fox</span>
        </h3>
        <p className='info__paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          vitae sapiente consequuntur, aliquam a aut voluptatibus! Quam vel,
          odit sint rerum ut asperiores repudiandae aliquid iusto est nesciunt
          sapiente soluta aliquam accusantium dignissimos ullam, harum ad odio
          itaque adipisci architecto, iste error cupiditate? Sit esse, error
          possimus quo ab porro!
        </p>
      </div>
      <div className='info__img--box'>
        <img className='info__img' src='/img/profile.jpg' alt='' />
      </div>
    </Section>
  );
};

export default About;
