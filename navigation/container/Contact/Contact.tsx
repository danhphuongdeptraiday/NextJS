import React from "react";
import MainNavigation from "@/components/MainNavigation/MainNavigation";
import classes from "./Contact.module.scss";

function Contact() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <div className={classes.container}>
        <h1>Contact</h1>
        <p>
          Oyid eleifend turpis elit sed est. Donec facilisis justo elit, in
          consectetur nulla pretium vitae.
        </p>
      </div>
    </div>
  );
}

export default Contact;
