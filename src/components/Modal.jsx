import { createPortal } from 'react-dom';
import '../scss/components/Modal.scss';

const Modal = ({ onCancel, header,  children }) => {
  const content = (
    <>
      <div className='modal-bg' onClick={onCancel}></div>
      <div className='modal'>
        <div className='modal-header'>
          <h2 className='heading-2 modal-title'>{header}</h2>
          <a className='modal-btn' onClick={onCancel} ></a>
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </>
  );
  return createPortal(content, document.querySelector('.modal-container'));
};

export default Modal;
