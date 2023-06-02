import Link from 'next/link'
import { FC } from 'react'
import styles from './header.module.scss'
import { useRouter } from 'next/navigation';

const Header: FC = () => {

    return (
        <header className={styles.header}>
            <Link href='/'>
                Home
            </Link>
            <Link href='/about'>
                About Page
            </Link>
        </header>
    )
}

export default Header