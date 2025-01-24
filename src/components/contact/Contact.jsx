import { BsArrowUpCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import Button from '../button/Button';
import './_Contact.scss';

export default function Contact() {
  const { contactRef, headerRef, handleScroll } = useContext(MainContext);

  return (
    <div className="contact-container" ref={contactRef}>
      <h2>contact</h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email " name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea
            name="message"
            id="message"
            placeholder="write me a message :)"
            rows="15"
          ></textarea>
        </div>

        <Button style="contact-btn" type="submit" />

        <div className="scroll-up" onClick={() => handleScroll(headerRef)}>
          <BsArrowUpCircle className="arrow-up" />
        </div>
      </form>
    </div>
  );
}
