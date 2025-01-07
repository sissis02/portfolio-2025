/* eslint-disable react/no-unescaped-entities */

import { Metadata } from 'next';
import Image from 'next/image';
import styles from './contact.module.scss';
import merci from '../../../public/merci.png';

export const metadata: Metadata = {
  title: 'Portfolio Sissis UL',
  description: 'Développeuse web full stack - front-end - back-end',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <section>
      <h4>CONTACT.</h4>
          <p>Besoin de plus d'informations me concernant&nbsp;? </p>
          <p>Email : <a href='mailto:sissis1993@gmail.com'>sissis1993@gmail.com</a></p>
          <p>
            Réseaux :
            {' '}
            <a href='https://www.linkedin.com/in/sissis-ul-670641153/' target='_blank'>LinkedIn</a>
            {' '}
            /
            {' '}
            <a href='https://github.com/sissis02' target='_blank'>GitHub</a>
          </p>
      </section>
      <aside>
        <Image src={merci} alt='marguerite' />
      </aside>
    </main>
  )
}