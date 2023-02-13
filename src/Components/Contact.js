import "./Contact.css";
import React from "react";

function Contact() {
  return (
    <div className="testing">
      <div className="hello">
        <h1>get in touch.</h1>
      </div>
      <div className="blab">
        <p>
          see something wrong on my website? think my ui needs some work? wanna
          hire me? check out my music taste? feel free to connect with me on the
          various platforms below
        </p>
      </div>
      <div className="socials">
        <img src="images/gmail.png" alt="its me yall" />
        <img src="images/linkedin.png" alt="its me yall" />
        <img src="images/github.png" alt="its me yall" />
        <img src="images/spotify.png" alt="its me yall" />
      </div>
    </div>
  );
}

export default Contact;
