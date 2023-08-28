import "./Homepage.css";
// import React from 'react';
import React from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
// import pic from '../../public/images/profpic.jpeg';
// import Link from "react-router";
// import { BodyText } from "./ui";
// import Navigation from './Shared/Navigation';
//testingb
function Homepage() {
  return (
    <div className="realmain">
      <div className="homepagemain">
        <div className="leftside">
          <div className="greetings">
            <TextLoop
              children={[
                "hello ",
                "안녕하세요 ",
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
                "γεια ",
                "kamusta "
              ]}
              springConfig={{ stiffness: 50, damping: 20 }}
            />
          </div>
          {/* this is the spacer not included in homepage main*/}
          <div className="spacer">
            <p> my name is jaelyn. </p>
          </div>

        </div>

        <div className="picdiv">
          <img src="images/scd.JPG" alt="its me yall" className="img1" />
        </div>


      </div>
    
      <div className="rrr">  <p>"destrcution leads to a very rough road but it also breeds creation"-
            red hot chili peppers</p></div>

    </div>
  );
}

export default Homepage;



