// src/components/Contact.js
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('dHZWYZnfckAyDh553');  // Replace with your EmailJS Public Key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i8541tp', 'template_rd792tr', form.current)  // Replace with your Service ID and Template ID
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          setMessageSent(true);
          setError(null);
          form.current.reset();  // Clear the form
        },
        (err) => {
          console.error('Error sending message:', err.text);
          setError('Failed to send message. Please try again later.');
          setMessageSent(false);
        }
      );
  };

  return (
    <section id="contact" className="fade-in">
      <h2>Contact</h2>
      <p>
        Feel free to reach out via <a href="mailto:skmdtousif172@gmail.com">email</a> or connect on <a href="https://codeforces.com/profile/sm_tousif21" target="_blank" rel="noreferrer">Codeforces</a>.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="from_name">Name</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          className="form-control mb-3"
          style={{ background: 'rgba(255,255,255,0.1)',  border: '1px solid var(--primary)' }}
        />

        <label htmlFor="from_email">Email</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          required
          className="form-control mb-3"
          style={{ background: 'rgba(255,255,255,0.1)',  border: '1px solid var(--primary)' }}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="form-control mb-3"
          style={{ background: 'rgba(255,255,255,0.1)',  border: '1px solid var(--primary)' }}
        />

        <button type="submit" className="btn">Send</button>
      </form>
      {messageSent && <p className="text-success mt-3">Message sent successfully! I'll get back to you soon.</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
    </section>
  );
}

export default Contact;
