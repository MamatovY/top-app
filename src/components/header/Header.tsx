'use client'
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link'
import { FC } from 'react'
import styles from './header.module.scss'

const Header: FC = () => {
    const pathname = usePathname()


    return (
        <header className={styles.header}>
            <Link href='/' className={pathname === '/' ? styles.active : ''} >
                Home
            </Link>
            <Link href='/about' className={pathname.startsWith('/about') ? styles.active : ''}>
                About Page
            </Link>
            <Link href='/blog' className={pathname.startsWith('/blog') ? styles.active : ''}>
                Blog
            </Link>
        </header>
    )
}

export default Header