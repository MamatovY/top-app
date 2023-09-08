'use client'
import { motion } from 'framer-motion'

const Main = ({ children }) => {
    const onTheRight = { x: '100%' };
    const inTheCenter = { x: 0 };
    const onTheLeft = { x: '-100%' };

    const transition = { duration: 0.6, ease: 'easeInOut' };
    return (
        <motion.main
            initial={onTheRight}
            animate={inTheCenter}
            exit={onTheLeft}
            transition={transition}
            style={{ textAlign: 'center', margin: '50px' }}>
            {children}
        </motion.main>
    )
}

export default Main