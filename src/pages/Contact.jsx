import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './css/Contact.module.css';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    let name = e.target.from_name.value;
    let email = e.target.from_email.value;
    let message = e.target.message.value;

    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
      alert('Something was wrong, Try again🥲');
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Thanks for your attention!');
        },
        () => {
          alert('Something was wrong, Try again🥲');
        }
      );
  };
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Quick Contact</p>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <div className={styles.name}>
            <label>Name :</label>
            <input type='text' name='from_name' />
          </div>
          <div className={styles.email}>
            <label>Email :</label>
            <input type='email' name='from_email' />
          </div>
          <div className={styles.message}>
            <label>Message :</label>
            <textarea name='message' />
          </div>
          <input className={styles.submit} type='submit' value='SEND' />
        </form>
      </div>
    </>
  );
}
