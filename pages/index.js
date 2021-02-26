/** @format */

import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minus odio
        quos culpa dolorem doloribus tempora provident voluptatum praesentium
        quam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minus
        odio quos?
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minus odio
        quos culpa dolorem doloribus tempora provident voluptatum praesentium
        quam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minus
        odio quos?
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
