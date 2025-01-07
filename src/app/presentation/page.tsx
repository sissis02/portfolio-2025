/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import styles from './presentation.module.scss';

export const metadata: Metadata = {
  title: 'Portfolio Sissis UL',
  description: 'Développeuse web full stack - front-end - back-end',
};

export default function Presentation() {
  return (
    <main className={styles.main}>
      <section>
        <h4>BIOGRAPHIE.</h4>
        <p>
          Auparavant, gestionnaire de sinistres automobiles et corporels au sein
          de compagnies d'assurances, c'est à partir de septembre 2023
          qu'à commencé ma nouvelle aventure dans la programmation informatique.
        </p>
        <p>
          Etant une personne qui a envie d'apprendre continuellement, d'être 
          challengée et de créer, c'est naturellement vers ce domaine que mon choix s'est porté.
        </p>
        <p>
          Le développement web a su susciter ma curiosité il y a quelques années
          de cela et me donner envie de me lancer et d'en faire mon métier d'aujourd'hui.
        </p>
        <p>
          Je comprends que bien au-delà d'être une profession, c'est un métier passion.
          De cette passion, je souhaite en faire ma vocation. 
        </p>
      </section>
      <section>
        <h4>COMPETENCES.</h4>
        <div>
          <em>FRONT</em>
          <p>JavaScript / TypeScript / React / Next.js / React Native / HTML / CSS</p>
        </div>
        <div>
          <em>BACK</em>
          <p>MySQL / MongoDB / Node.js / Express.js</p>
        </div>
        <div>
          <em>GESTION DE CODE ET PROJETS</em>
          <p>Git / GitHub / Bitbucket</p>
        </div>
        <div>
          <em>MÉTHODOLOGIE - CONCEPT</em>
          <p>Agile Scrum</p>
        </div>
        <div>
          <em>OUTILS</em>
          <p>Figma / Notion / Trello</p>
        </div>
      </section>
    </main>
  )
}