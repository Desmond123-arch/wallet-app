import React, { createContext } from 'react'
import PageAction from '../types/PageAction'

export const PageContext = createContext<{
    page: number
    pageDispatch: React.Dispatch<PageAction>
}>({
    page: 0,
    pageDispatch: () => null,
})
