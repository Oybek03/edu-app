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
      </div>
    </div>
  );
};
export default Contact;
