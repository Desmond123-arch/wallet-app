import { useContext } from 'react'
import './App.css'
import GetStarted from './pages/GetStarted'
import OnBoarding from './pages/OnBoarding'
import SelectDevice from './pages/SelectDevice'
import { PageContext } from './contexts/PageContext'

function App() {
    const { page } = useContext(PageContext)
    const pages = [<OnBoarding />, <SelectDevice />, <GetStarted />]

    return <>{pages[page]}</>
}

export default App
