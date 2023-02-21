import "./Projects.css";
import React from "react";
import Card from "./Shared/Card";

function Projects() {
  return (
    <div className="wrapper1">
      <Card
        image="images/personalsite.png"
        title="personal website"
        description="my personal website"
      />
       <Card
        image="images/scubasteve.jpeg"
        title="personal website"
        description="my personal website"
      />
       <Card
        image="images/soccer_field.jpeg"
        title="personal website"
        description="my personal website"
      />
    </div>
  );
}

export default Projects;
