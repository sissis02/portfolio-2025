'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';
import marguerite from '../../../public/mg.png';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.container}>
      {
        pathname === '/'
        ? <div className={styles.links}>
          <Link
            href={'https://github.com/sissis02'}
            passHref={true}
            target='_blank'
          >
            GH
          </Link>
          <Link
            href={'https://www.linkedin.com/in/sissis-ul-670641153/'}
            passHref={true}
            target='_blank'
          >
            IN
          </Link>
          <a
            href='/cv-sissis-ul.pdf'
            target='_blank'
          >
            CV
          </a>
        </div>
        : <div className={styles.links}>
            {
              pathname?.startsWith('/experiences/') && pathname !== '/experiences' &&
              <Link href={'/experiences'}>RETOUR</Link>
            }
            {
              pathname?.startsWith('/projects/') && pathname !== '/projects' &&
              <Link href={'/projects'}>RETOUR</Link>
            }
            <Link href={'/'} className={styles.internal}>ACCUEIL</Link>
        </div>
      }
        <Link href={'/'}><Image src={marguerite} alt='marguerite' /></Link>
      </header>
  )
}