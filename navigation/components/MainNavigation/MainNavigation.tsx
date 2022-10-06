import React from "react";
import classes from "./MainNavigation.module.scss";
import { useRouter } from "next/router";
import NavButton from "components/NavButton/NavButton";

function MainNavigation() {
  const router = useRouter();

  const goToMenu = () => {
    router.push("/home");
  };

  const goToAbout = () => {
    router.push("/about");
  };

  const goToContact = () => {
    router.push("/contact");
  };

  return (
    <div className={classes.container}>
      <NavButton onClick={goToMenu}>Home</NavButton>
      <NavButton onClick={goToAbout}>About</NavButton>
      <NavButton onClick={goToContact}>Contact</NavButton>
    </div>
  );
}

export default MainNavigation;
