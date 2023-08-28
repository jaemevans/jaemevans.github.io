import "./Contact.css";
import React from "react";

function Contact() {
  return (
    <div className="contacts">
      <div className="hello">
        <h1>get in touch.</h1>
      </div>
      <div className="blab">
        <div className="jae">
        <p>
          wanna check out my music
          taste? feel free to connect with me on the various platforms below.
          you can also check out my <a href="images/resume.pdf" target="_blank" rel="noopener noreferrer">résumé.</a>
        </p>
        </div>
        <div className="jar">
        <img src="images/park.jpeg" class="park"/>
        </div>
      </div>
      <div className="socials">
        <a href="mailto: jaelynevans1@gmail.com">
          <img src="images/gmail.png" alt="gmail" className="img2" />
        </a>
        <a href="https://www.linkedin.com/in/jaelyn-evans/" target="_blank">
          {" "}
          <img src="images/linkedin.png" alt="linkedin" className="img2" />
        </a>
        <a href="https://github.com/jaemevans" target="_blank">
          {" "}
          <img src="images/github.png" alt="github" className="img2" />{" "}
        </a>
        <a
          href="https://open.spotify.com/user/j.m.e74?si=MX7CVQUwRsiVhszyb_gilQ"
          target="_blank"
        >
          <img src="images/spotify.png" alt="spotify" className="img2" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Contact;
