/* eslint-disable react/no-unescaped-entities */
'use client';

import { useRouter } from 'next/navigation';
import { experiences } from 'data/experiences';
import styles from './experiences.module.scss';

export default function Experiences() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <section>
      <h4>EXPERIENCES.</h4>
          <p>
            Je vous présente ici un carroussel des différents projets auxquels j'ai
            pu participé durant mes expériences professionnelles&nbsp;: 
          </p>
          <ul>
            <li>Agence <h2><a href='https://bakasable.fr/' target='_blank'>BAKASABLE</a></h2>&nbsp;: avr - sept 2024</li>
            <li><h2><a href='https://www.wildcodeschool.com/' target='_blank'>WILD CODE SCHOOL</a></h2>&nbsp;: sept 2023 - févr 2024</li>
          </ul>
          <p>
            Bonne lecture et bon visionnage à vous&nbsp;!
          </p>
      </section>
      <nav>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h5 onClick={() => router.push(`/experiences/${index}`)}>{experience.name}</h5>
            <p>{experience.presentation}</p>
          </div>
        ))}
      </nav>
    </main>
  )
}