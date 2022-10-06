import React from "react";
import MainNavigation from "@/components/MainNavigation/MainNavigation";
import classes from "./About.module.scss";

function About() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <div className={classes.container}>
        <h1>About</h1>
        <p>
          Id consectetur urna misao eu justo. In hac habitasse platea dictumst.
          Maecenas non convallis nunc. Cras maximus, nulla in feugiat
          condimentum, neque metus varius arcu.
        </p>
      </div>
    </div>
  );
}

export default About;
