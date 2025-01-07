/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams } from 'next/navigation';
import { projects } from 'data/projects'; 
import styles from './project.module.scss';

export default function Project() {
  const params = useParams();
  const project = projects[Number(params.project)];
  return (
    <main className={styles.main}>
      <section>
        <h6>{project.name}.</h6>
        {
          project.desc.map((p, index) => (
            <p key={index}>{p}</p>
          ))
        }
        <p>
          {project.link && project.link[0]}
          <a href={project.link && project.link[2]} target='_blank'>{project.link && project.link[1]}</a>
        </p>
      </section>
      <aside>
        {
          project.pictures.map((pic, index) => (
            <img key={index} src={pic} alt='capture écran du projet' />
          ))
        }
      </aside>
    </main>
  )
}