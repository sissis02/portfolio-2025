/* eslint-disable react/no-unescaped-entities */
'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function Home() {
  const router = useRouter();

  const handleNavigate = (link: string) => {
      router.push(link);
  };
  return (
    <main className={styles.main}>
      <section>
      <h1>Sissis UL.</h1>
          <p>
            Développeuse Web Junior / Front-end / Back-end.
            <br />
            Précedemment en stage de 6 mois en tant que développeuse front-end à l'agence <h2><a href='https://bakasable.fr/' target='_blank'>Bakasable</a></h2>.
          </p>
      </section>
      <nav>
      <button type='button' onClick={() => handleNavigate('/presentation')}><h3>présentation</h3></button>
          <button type='button' onClick={() => handleNavigate('/experiences')}><h3>expériences</h3></button>
          <button type='button' onClick={() => handleNavigate('/projects')}><h3>projets</h3></button>
          <button type='button' onClick={() => handleNavigate('/awards')}><h3>récompenses</h3></button>
          <button type='button' onClick={() => handleNavigate('/contact')}><h3>contact</h3></button>
      </nav>
    </main>
  );
}
