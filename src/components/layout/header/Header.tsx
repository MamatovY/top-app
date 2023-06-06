import { useRouter } from 'next/router'
import Link from 'next/link'
import { FC } from 'react'
import styles from './header.module.scss'

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