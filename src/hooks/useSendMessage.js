import { useState } from 'react';
import axios from 'axios';

export function useSendMessage() {
  const [responseText, setResponseText] = useState('');
  const [showModal, setShowModal] = useState();
  const emailSent = 'Message sent successfully!';
  const errorText = 'Oops! Something went wrong';
  // const URL = 'http://localhost:3000/send-email';
  const URL = 'https://guarded-dusk-71683-2cb27cae4823.herokuapp.com/send-email';

  const sendMessage = async (data) => {
    const { fullname, email, newMessage } = data;
    await axios
      .post(URL, {
        fullname,
        email,
        newMessage,
      })
      .then((response) => {
        if (response.data === 'Email Sent') {
          setResponseText(emailSent);
        } else {
          setResponseText(errorText);
        }
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error);
        setResponseText(errorText);
        setShowModal(true);
      });
    return;
  };

  return { sendMessage, responseText, showModal, setShowModal };
}
