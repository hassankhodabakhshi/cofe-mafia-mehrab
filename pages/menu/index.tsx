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
          <h2 className={styles.subtitle}>قهوه ها</h2>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>اسپرسو سینگل</p>
            <p className={`${styles.price} ${styles.p}`}>30</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>اسپرسو دبل
            </p>
            <p className={`${styles.price} ${styles.p}`}>35</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>کاپوچینو</p>
            <p className={`${styles.price} ${styles.p}`}>350</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>کافه لته
            </p>
            <p className={`${styles.price} ${styles.p}`}>00</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>کافه موکا
            </p>
            <p className={`${styles.price} ${styles.p}`}>450</p>
          </article>
        </section>

        <section>
          <h2 className={styles.subtitle}>قلیان</h2>
          <p className={`${styles.flavor} ${styles.p2}`}>مدت زمان کشیدن یک قلیان 10 دقیقه می باشد</p>
          <p className={`${styles.flavor} ${styles.p2}`}>لطفا رعایت بفرمایید</p>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>دو سیب</p>
            <p className={`${styles.price} ${styles.p}`}>100</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>سیب یخ</p>
            <p className={`${styles.price} ${styles.p}`}>100</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>لیمو نعنا</p>
            <p className={`${styles.price} ${styles.p}`}>100</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>هندوانه</p>
            <p className={`${styles.price} ${styles.p}`}>100</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>آدامس دارچین</p>
            <p className={`${styles.price} ${styles.p}`}>100</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.flavor} ${styles.p}`}>بلوبری</p>
            <p className={`${styles.price} ${styles.p}`}>100</p>
          </article>
          <p className={`${styles.flavor} ${styles.p2}`}>تعویض سری 50 تومان</p>
          
        </section>

        <section>
          <h2 className={styles.subtitle}>نوشیدنیهای سرد
          </h2>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>آب میوه های طبیعی فصل</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>لیموناد</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>انرژی زا رد پاور</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>اسموتی آلبالو</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
        </section>

        <section>
          <h2 className={styles.subtitle}>بستنی ها</h2>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>بستنی توت فرنگی</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>بستنی سنتی پسته و خامه مخصوص شیراز</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>شکلات دارک دام
            </p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>مخصوص کافه مافیا محراب</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
        </section>
        <section>
          <h2 className={styles.subtitle}>کیک ها</h2>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>کیک شکلاتی</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>کیک هویج و گردو</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>چیز کیک روز</p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>کیک شکلاتی و بستنی وانیلی
            </p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
        </section>
        <section>
          <h2 className={styles.subtitle}>میلک شیک ها
          </h2>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>بادام و کارامل
            </p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>نوتلا لاور
            </p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>توت فرنگی
            </p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
          <article className={styles.item}>
            <p className={`${styles.dessert} ${styles.p}`}>موز و شکلات
           </p>
            <p className={`${styles.price} ${styles.p}`}>200</p>
          </article>
        </section>
      </main>

      <div className={styles.bottomLine} />
      <footer className={styles.footer}>
        <p className={`${styles.address} ${styles.p}`}>
          <a href="https://isonetwork.ir" target="_blank" rel="noopener noreferrer">طراح سایت ایزونتورک</a>
        </p>
        <p className={`${styles.address} ${styles.p}`}>تمامی حقوق سایت محفوظ است©</p>
      </footer>
    </div>
  );
};

export default Menu;
