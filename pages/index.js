import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>TSB, Just Practice</h2>
      <div className={styles.Btns}>
        <button className={styles.btns}>Addition</button>
        <br />
        <button className={styles.btns}>Substraction</button>
        <br />
        <button className={styles.btns}>Division</button>
        <br />
        <button className={styles.btns}>Multiplication</button>
        <br />
        <button className={styles.btns}>Square Roots</button>
        <br />
        <button className={styles.btns}>Cube Roots</button>
        <br />
        <button className={styles.btns}>Percentage</button>
        <br />
      </div>
    </div>
  );
}
