import Link from 'next/link'
import { FC } from 'react'
import Main from '../../components/main'

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Main>
            <div>
                <h1>About us</h1>
                <ul>
                    <li>
                        <Link href='/about/contacts'>Contacts</Link>
                    </li>
                    <li>
                        <Link href='/about/team'>Team</Link>
                    </li>
                </ul>
                {children}
            </div>
        </Main>
    )
}

export default Layout