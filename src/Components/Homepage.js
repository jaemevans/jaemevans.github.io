import "./Homepage.css";
// import React from 'react';
import React from "react";
import TextLoop from "react-text-loop";
// import pic from '../../public/images/profpic.jpeg';
// import Link from "react-router";
// import { BodyText } from "./ui";
// import Navigation from './Shared/Navigation';

function Homepage() {
  return (

    <div className="homepagemain">
      <div className="greetings">
        <TextLoop
          children={[
            "hello ",
            "howdy ",
            "aloha ",
            "ciao ",
            "bonjour ",
            "hola ",
            "shalom ",
            "你好 ",
            "olá ",
            "أهلا ",
            "hallo ",
            "こんにちは ",
            "안녕하세요 ",
            "γεια ",
            "kamusta "
          ]}
          springConfig={{ stiffness: 180, damping: 8 }}
        />
        <div>spacer</div>
        <p> my name is jaelyn.</p>
      </div>

      <div className="picdiv">
        <p>see me?</p>
        <img src="images/profpic.jpeg" alt="its me yall" className="profpic" />
      </div>

      <div className="quote">
        <p>
          "destrcution leads to a very rough road but it also breeeds creation"-
          red hot chili peppers
          <br></br>
          with that being said, please bear with me as i develop this site to be
          more creative this very much a work in progress and more than likely
          very buggy i am trying my best
        </p>
      </div>
    </div>
  );
}

export default Homepage;
