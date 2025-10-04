import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('uA4PjWNOOvyBNDJSz');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs
      .sendForm('service_w7sgzbu', 'template_3ux287g', form.current)
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          setMessageSent(true);
          setError(null);
          setFormData({
            from_name: '',
            from_email: '',
            message: ''
          });
          setIsLoading(false);
          
          // Reset message sent status after 5 seconds
          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        },
        (err) => {
          console.error('Error sending message:', err.text);
          setError('Failed to send message. Please try again later or contact me directly at skmdtousif172@gmail.com');
          setMessageSent(false);
          setIsLoading(false);
        }
      );
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'skmdtousif172@gmail.com',
      link: 'mailto:skmdtousif172@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91-7908319931',
      link: 'tel:+917908319931'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Sk Md Tousif',
      link: 'https://www.linkedin.com/in/sk-md-tousif-2a1b30257/'
    },
    {
      icon: '⚡',
      title: 'Codeforces',
      value: 'sm_tousif21',
      link: 'https://codeforces.com/profile/sm_tousif21'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new opportunities and interesting projects</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm currently looking for new opportunities in software development and 
            competitive programming. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-method"
              >
                <span className="method-icon">{method.icon}</span>
                <div className="method-info">
                  <span className="method-title">{method.title}</span>
                  <span className="method-value">{method.value}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="currentColor"/>
                </svg>
              </a>
            ))}
          </div>

          <div className="contact-availability">
            <div className="availability-status">
              <div className="status-indicator"></div>
              <span>Available for new opportunities</span>
            </div>
            <p>Response time: Usually within 24 hours</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="from_name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="form-textarea"
                placeholder="Tell me about your project or just say hello..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z" fill="currentColor"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {messageSent && (
            <div className="alert success">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" fill="currentColor"/>
              </svg>
              Message sent successfully! I'll get back to you within 24 hours.
            </div>
          )}

          {error && (
            <div className="alert error">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" fill="currentColor"/>
              </svg>
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;