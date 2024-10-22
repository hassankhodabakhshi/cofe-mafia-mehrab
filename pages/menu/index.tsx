import React from 'react';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <main className={styles.body}>
        <h1 className={styles.title}>کافه مافیا محراب</h1>
        <p className={`${styles.established} ${styles.p}`}>منو کافه</p>
        <div className={styles.line} />

        <section>
          <h2 className={styles.subtitle}>قهوه</h2>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>اسپرسو سینگل</p>
            <p className={`${styles.price} ${styles.p}`}>30</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>اسپرسو دوبل</p>
            <p className={`${styles.price} ${styles.p}`}>35</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>کاپوچینو</p>
            <p className={`${styles.price} ${styles.p}`}>350</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>Hazelnut Chocolate</p>
            <p className={`${styles.price} ${styles.p}`}>400</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>Pizzah</p>
            <p className={`${styles.price} ${styles.p}`}>450</p>
          </article>
        </section>

        <section>
          <h2 className={styles.subtitle}>قلیان</h2>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>French Vanilla</p>
            <p className={`${styles.price} ${styles.p}`}>300</p>
          </article>
          <p className={`${styles.flavor} ${styles.p}`}>قلیان میوه‌ای و معمولی موجود است.</p>
        </section>

        <section>
          <h2 className={styles.subtitle}>دسر</h2>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>Donut Tamuh</p>
            <p className={`${styles.price} ${styles.p}`}>150</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>Cherry Pie</p>
            <p className={`${styles.price} ${styles.p}`}>275</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>Cheesecake</p>
            <p className={`${styles.price} ${styles.p}`}>300</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>Cinnamon Roll</p>
            <p className={`${styles.price} ${styles.p}`}>250</p>
          </article>
        </section>
      </main>

      <div className={styles.bottomLine} />
      <footer className={styles.footer}>
        <p className={`${styles.address} ${styles.p}`}>
          <a href="https://isonetwork.ir" target="_blank" rel="noopener noreferrer">طراح سایت ایزونتورک</a>
        </p>
        <p className={`${styles.address} ${styles.p}`}>تمامی حقوق سایت محفوظ است</p>
      </footer>
    </div>
  );
};

export default Menu;
