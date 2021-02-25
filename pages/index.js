/** @format */

import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        laboriosam a earum, provident et quod repudiandae! Illo eaque sit at
        nostrum, alias hic laudantium beatae eum ratione dolores quas quis
        doloribus architecto reprehenderit unde necessitatibus rerum adipisci
        repellendus. Perferendis, cupiditate blanditiis repellat debitis enim
        pariatur necessitatibus rem nemo mollitia aperiam unde repudiandae
        consectetur sunt! Officia aliquid adipisci voluptates debitis
        accusantium.
      </p>
      <Footer />
    </div>
  );
}
