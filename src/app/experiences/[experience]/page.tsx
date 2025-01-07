/* eslint-disable @next/next/no-img-element */
 'use client';

import { useParams } from 'next/navigation';
import { experiences } from 'data/experiences';
import styles from './experience.module.scss';

export default function Experience() {
  const params = useParams();
  const experience = experiences[Number(params.experience)];
  return (
    <main className={styles.main}>
      <section>
        <h6>{experience.name}.</h6>
        {
          experience.desc.map((d, index) => (
            <p key={index}>{d}</p>
          ))
        }
        <p>
          {experience.link && experience.link[0]}
          <a href={experience.link && experience.link[2]} target='_blank'>{experience.link && experience.link[1]}</a>
        </p>
      </section>
      <aside>
        {
          experience.pictures.map((pic, index) => (
            <img key={index} src={pic} alt='capture écran du projet' />
          ))
        }
      </aside>
    </main>
  )
}