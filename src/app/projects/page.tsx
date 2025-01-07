'use client';

import { useRouter } from 'next/navigation';
import { projects } from 'data/projects';
import styles from './projects.module.scss';

export default function Projects() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <section>
        <h4>PROJETS.</h4>
        <p>
          En plus des réalisations de mes expériences
          professionnelles, voici des projets personnels ...  
        </p>
      </section>
      <nav>
        {projects.map((project, index) => (
          <div key={index}>
            <h5 onClick={() => router.push(`/projects/${index}`)}>{project.name}</h5>
            <p>{project.presentation}</p>
          </div>
        ))}
      </nav>
    </main>
  )
}