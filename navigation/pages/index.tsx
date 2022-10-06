import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainNavigation from "components/MainNavigation/MainNavigation";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainNavigation></MainNavigation>
    </div>
  );
};

export default Home;
