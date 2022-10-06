import React from "react";
import MainNavigation from "@/components/MainNavigation/MainNavigation";
import classes from "./Home.module.scss";

function Home() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <div className={classes.container}>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pulvinar turpis quis mi pretium pellentesque. In luctus, leo sit amet
          egestas sagittis, ipsum mauris lobortis orci.
        </p>
      </div>
    </div>
  );
}

export default Home;
