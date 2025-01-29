import { BsArrowUpCircle } from 'react-icons/bs';
import { useContext, useReducer, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import Button from '../button/Button';
import toast, { Toaster } from 'react-hot-toast';
import './_Contact.scss';

// Encode data for the form submission
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Contact() {
  const { contactRef, headerRef, handleScroll } = useContext(MainContext);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const [formValues, setFormValues] = useReducer(
    (prevs, values) => ({ ...prevs, ...values }),
    initialValues
  );

  const { name, email, message } = formValues;

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.includes('@')) {
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...formValues }),
        });
        if (!response.ok) {
          const message = `An error has occurred: ${response.status}`;
          throw new Error(message);
        }
        toast.success('Thank you!');
        setSubmitSuccess(!submitSuccess);
        setTimeout(() => setSubmitSuccess(false), 2000);
        /* e.target.reset() doesn't work ?? */
        setFormValues({ name: '', email: '', message: '' });
      } catch (error) {
        toast.error('Sorry, something went wrong');
        console.error(error.message);
        setFormValues({ name: '', email: '', message: '' });
      }
    } else {
      toast.error('Please enter a correct email-adress.');
    }
  };

  return (
    <>
      <Toaster position="center" />
      <div className="contact-container" ref={contactRef}>
        <h2>contact</h2>

        <form name="contact" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact form" />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email "
              name="email"
              id="email"
              value={email}
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              placeholder="write me a message :)"
              rows="15"
              onChange={handleFormChange}
            ></textarea>
          </div>

          <Button style="contact-btn" type="submit" />

          <div className="scroll-up" onClick={() => handleScroll(headerRef)}>
            <BsArrowUpCircle className="arrow-up" />
          </div>
        </form>
      </div>
    </>
  );
}
