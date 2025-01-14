import { BsArrowUpCircle } from 'react-icons/bs';
import './_Contact.scss';

export default function Contact() {
  return (
    <div className="contact-container">
      <h3>contact</h3>

      <form id="contact-form">
        {/* change into useRef ! */}
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
      </form>

      <p className="scroll-up">
        <BsArrowUpCircle className="arrow-up" />
      </p>
    </div>
  );
}
