import { BsArrowUpCircle } from 'react-icons/bs';
import './_Contact.scss';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

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
          <input type="text" name="email" id="email" required />
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
        {/* make a comp out of it (same in Hero) */}
        <button type="submit">
          <span>contact</span>
          <span>me</span>
        </button>

        <div className="scroll-up" onClick={() => handleScroll(headerRef)}>
          <BsArrowUpCircle className="arrow-up" />
        </div>
      </form>
    </div>
  );
}
