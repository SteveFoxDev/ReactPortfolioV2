import { useForm } from 'react-hook-form';
import Modal from './Modal';
import MessageModal from './MessageModal';
import InputGroup from './InputGroup';
import Button from './Button';
import { useSendMessage } from '../hooks/useSendMessage';
import '../scss/components/ContactForm.scss';

const ContactForm = () => {
  const {sendMessage, responseText, showModal, setShowModal} = useSendMessage();
  
  const onCancel = () => {
    setShowModal(false);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    sendMessage(data);
    reset();
  }

  return (
    <div className='contact-form'>
      {showModal && <Modal onCancel={onCancel} ><MessageModal onCancel={onCancel} message={responseText} /></Modal>}
      <form className='form' onSubmit={handleSubmit(submitForm)}>
        <InputGroup
        type='text'
          label='Name'
          name='fullname'
          errors={errors.fullname}
          register={register}
        />
        <InputGroup
        type='text'
          label='Email'
          name='email'
          errors={errors.email}
          register={register}
        />
        <InputGroup
        type='textarea'
          label='How can I help you?'
          name='newMessage'
          cols={40}
          rows={4}
          errors={errors.newMessage}
          register={register}
        />
        <Button
          type='submit'
          onClick={handleSubmit(submitForm)}
          className='btn btn-text form__btn'
        >
          Send Message &rarr;
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
