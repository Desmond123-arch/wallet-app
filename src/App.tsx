import { useContext } from 'react'
import './App.css'
import ConnectLedger from './pages/ConnectLedger'
import GenuineCheck from './pages/GenuineCheck'
import GetStarted from './pages/GetStarted'
import OnBoarding from './pages/OnBoarding'
import SelectDevice from './pages/SelectDevice'
import { PageContext } from './contexts/PageContext'
import { motion } from 'framer-motion'
import SeedPhrases from './pages/SeedPhrases'

function App() {
    const { page } = useContext(PageContext)
    const pages = [
        <OnBoarding />,
        <SelectDevice />,
        <GetStarted />,
        <ConnectLedger />,
        <GenuineCheck />,
        <SeedPhrases />,
    ]

    return (
        <div className="w-screen h-[full] font-inter flex relative bg-[#181a1c] text-white">
            <motion.div
                key={page}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.5 }}
            >
                {pages[page]}
            </motion.div>
        </div>
    )
}

export default App
