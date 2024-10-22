import Head from "next/head";
import Image from "next/image";
import { m } from "framer-motion";
// My imports.
import styles from "./HomePage.module.css";
import coffeeShopImage from "../public/img/cofemehrab.jpg";
import { pageAnimation } from "../utils/animations/animation";
// My component.
import WelcomeMessage from "../components/Welcome/WelcomeMessage";

export default function Home() {
  return (
    <>
      <Head>
        <title>کافه مافیا محراب</title>
        <meta
          name="description"
          content="خوش آمدید به کافه مافیا محراب"
          title="title"
        />
      </Head>
      <div className={styles.homeImage}>
        <Image
          alt="Coffee Shop Interior"
          title="Image by @pinchebesu from Unsplash"
          src={coffeeShopImage}
          quality={80}
          placeholder="blur"
          blurDataURL="/blur/homeBlur.png"
          fill
        />
      </div>
      <m.div
        className={styles.pageOverlay}
        initial="in"
        animate="animate"
        variants={pageAnimation}
      >
        <WelcomeMessage />
      </m.div>
    </>
  );
}
