/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import styles from './awards.module.scss';

export const metadata: Metadata = {
  title: 'Portfolio Sissis UL',
  description: 'Développeuse web full stack - front-end - back-end',
};

export default function Awards() {
  return (
    <main className={styles.main}>
      <aside>
        <h4>RECOMPENSES.</h4>
        <p>
          Depuis mes débuts en tant que développeuse web, des prix m'ont
          également été déscernés.
        </p>
      </aside>
      <nav>
        <div>
          <h5 className={styles.h5}>Hackathon</h5>
          <p><h2>WILD CODE SCHOOL</h2> x <h2>L'ORÉAL</h2> - JANV 2024</p>
          <p>Finaliste</p>
        </div>
        <div>
          <h5 className={styles.h5}>Hackathon</h5>
          <p>WILD CODE SCHOOL - DÉC 2023</p>
          <p>1ère place</p>
        </div>
        <div>
          <h5 className={styles.h5}>Code In The Dark</h5>
          <p>WILD CODE SCHOOL - OCT 2023</p>
          <p>3ème place</p>
        </div>
      </nav>
    </main>
  )
}