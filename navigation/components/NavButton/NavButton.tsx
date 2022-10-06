import React from "react";
import classes from "./NavButton.module.scss";

type NavBtn = {
  children: string;
  onClick: () => void;
};

function NavButton({ children, onClick }: NavBtn) {
  return (
    <div onClick={onClick} className={classes.eachButton}>
      {children}
    </div>
  );
}

export default NavButton;
