import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Section from './Section';
import ContactForm from './contactForm';
import '../scss/components/Contact.scss';

const Contact = () => {
  return (
    <Section id='contact' title='Contact Me' >
      <ContactForm />
    <div className='contact'>
      <h3 className='heading-3 contact__heading'>Let&apos;s connect</h3>
      <p className='contact__info'>
        Looking for a Web Developer to join your team? Or, do you want to talk
        about your next project? Feel free to reach out to me, I would love to
        talk to you!
      </p>
      <ul className='contact__list'>
        <li className='contact__list--item'>
          <a
            href='https://github.com/SteveFoxDev'
            rel='noopener noreferrer'
            target='_blank'
            className='contact__list--link'
          >
            <FaGithub className='contact__list--icon contact__list--icon-git' />
            /SteveFoxDev
            <FaExternalLinkAlt className='contact__list--icon-exlink' />
          </a>
        </li>

        <li className='contact__list--item'>
          <a
            href='https://www.linkedin.com/in/steve-fox-dev/'
            rel='noopener noreferrer'
            target='_blank'
            className='contact__list--link'
          >
            <FaLinkedin className='contact__list--icon contact__list--icon-linkedin' />
            /steve-fox-dev
            <FaExternalLinkAlt className='contact__list--icon-exlink' />
          </a>
        </li>
      </ul>
    </div>
    
    </Section>
  );
};

export default Contact;
