import Image from 'next/Image'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="Logo ignews"
          height={100}
          width={100}
        />
        <nav>
          <a className={styles.active} href="#">Home</a>
          <a href="#">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}