import { useState } from 'react';
import classes from './contact-form.module.css';
function ContactForm(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setEnteredEmail('');
    setEnteredName('');
    setEnteredMessage('');
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => {
                setEnteredEmail(event.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='message'>Message</label>
            <textarea
              rows='5'
              id='message'
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
              required
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
