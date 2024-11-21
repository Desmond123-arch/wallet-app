import { ReactNode, useReducer } from 'react'
import { PageReducer } from '../../reducers/PageReducer'
import { PageContext } from '../PageContext'

interface Props {
    children: ReactNode
}

const initialState = {
    page: 0,
}

const PageContextProvider: React.FC<Props> = ({ children }) => {
    const [page, pageDispatch] = useReducer(PageReducer, initialState.page)

    return (
        <PageContext.Provider value={{ page, pageDispatch }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContextProvider
