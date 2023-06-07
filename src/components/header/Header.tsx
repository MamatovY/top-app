'use client'
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link'
import { FC } from 'react'
import styles from './header.module.scss'

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
            <Link href='/blog'>
                Blog
            </Link>
        </header>
    )
}

export default Header