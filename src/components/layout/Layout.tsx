import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout