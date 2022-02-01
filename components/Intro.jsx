import Image from "next/image";
import styles from "../styles/Intro.module.css"

const Intro = () => {
  return <div className={styles.container}>
    <div className={styles.card}>
      <h1 className={styles.title}>
        <span className={styles.colorPop}>Hello.</span> Welcome to my portfolio blah blah blah
      </h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis minus reiciendis perspiciatis, eum quae asperiores vitae doloremque sunt accusantium tenetur illo, nemo id tempore odit quisquam! Sunt, delectus repellendus?</p>
      <button className={styles.button}>Projects</button>
    </div>
    <div className={styles.card}>
      <Image src="/img/" alt=""/>
    </div>
  </div>;
};

export default Intro;
