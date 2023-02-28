import "./Projects.css";
import React from "react";
import Card from "./Shared/Card";

function Projects() {
  return (
    
 <div>
  <div className="projheader">
    projects
  </div>

    <div className="wrapper1">
      <Card
        weblink="https://github.com/jaemevans/jaemevans.github.io"
        image="images/personalsite.png"
        title="personal website"
        description="my personal website developed from scratch using React, designed in Figma and deployed using Github pages."
      />
    </div>
    </div>
    
  );
}

export default Projects;
