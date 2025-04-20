const InputGroup = ({ label, type, name, errors, register, ...props }) => {
  const validation = { required: 'is required.' };
  const messageValidation = {
    required: 'Message is empty, at least say Hello!',
  };
  const emailValidation = {
    required: 'is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'is invalid',
    },
  };

  let renderedInput;

  if (name === 'newMessage') {
    renderedInput = (
      <textarea
        type={type}
        {...register(name, messageValidation)}
        id={name}
        name={name}
        className={`form__input ${errors && 'form__input--error'}`}
        placeholder={
          errors !== undefined ? errors.message : 'How can I help you?'
        }
        {...props}
      />
    );
  } else {
    renderedInput = (
      <input
        {...register(name, name === 'email' ? emailValidation : validation)}
        id={name}
        name={name}
        type={type}
        className={`form__input ${errors && 'form__input--error'}`}
        placeholder={`${label} ${errors !== undefined ? errors.message : ''}`}
        {...props}
      />
    );
  }

  return (
    <div className='form__group'>
      {renderedInput}
      <label htmlFor={name} className='form__label'>
        {label} {errors && errors.type === 'pattern' ? errors.message : ''}
      </label>
    </div>
  );
};

export default InputGroup;
