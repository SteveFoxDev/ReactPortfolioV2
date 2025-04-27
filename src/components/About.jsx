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
        I really enjoy building web applications! Whether it is front-end, back-end, or anywhere in between I love it! I am driven by two impulses, the first is creativity, who doesn&apos;t love to create? The other is curiosity, for as long as I can remember I have had a natural desire to learn how &apos;things&apos; work. 
        </p>
        <p className='info__paragraph'>During my first college programming course in JAVA, I found that programming satisfied both of those desires. Not knowing at the time that JavaScript was not related to Java, I enrolled in a JavaScript course and I am glad I did! Since then, I have developed skills in HTML, CSS, JavaScript, ReactJS, NodeJS, Express, MongoDB, MySQL and more.</p>
        <p className='info__paragraph'>When I&apos;m not writing code I like woodworking, gardening, sewing, going to the gym and trying to play guitar! No matter what I am doing, I try to make it fun and get others to laugh... or at least smile!</p>
      </div>
      <div className='info__img--box'>
        <img className='info__img' src='/img/me.jpg' alt='' />
      </div>
    </Section>
  );
};

export default About;
