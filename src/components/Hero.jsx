import Button from './Button';
import '../scss/components/Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <h2 className='heading-2 hero__heading--2'>I&apos;m, a Web Developer</h2>
      <div className='hero__heading--wrapper'>
        <h1 className='heading-1 hero__heading--1 hero__heading--left'>
          <span className='hero__heading--span'>&lt;</span>{' '}Hello
        </h1>
        <h1 className='heading-1 hero__heading--1 hero__heading--right'>
          World <span className='hero__heading--span'>/&gt;</span>
        </h1>
      </div>
      <p className='hero__heading--p'>Based in Fayetteville, WV</p>
      <Button
        type='anchor'
        href='#projects'
        className='hero__button btn btn-text'
      >
        Check out my projects &rarr;
      </Button>
      <div className='hero__arrow'>&darr;</div>
    </div>
  );
};

export default Hero;
