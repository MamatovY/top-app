'use client'
import Link from 'next/link'
import { FC } from 'react'
import styles from './header.module.scss'
import { usePathname } from 'next/navigation';

const Header: FC = () => {
    const pathname = usePathname()
    console.log(pathname);
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