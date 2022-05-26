import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact-sections">
        <div className="left-section">
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <textarea cols="47" rows="10" placeholder="Message"></textarea>
            <button className="green-button send-btn">Send</button>
          </form>
        </div>
        <div className="right-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.525686448254!2d69.28454511526243!3d41.340926279268416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCY0L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0KLQtdGF0L3QvtC70L7Qs9C40Lk!5e0!3m2!1sru!2s!4v1653497562990!5m2!1sru!2s"
            height="450"
            width="800"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
