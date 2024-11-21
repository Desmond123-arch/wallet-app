import { Dispatch } from 'react'
import PageAction from '../types/PageAction';

export const nextPage = (pageDispatch: Dispatch<PageAction>) => {
    pageDispatch({ type: 'NEXT_PAGE' });
};

export const prevPage = (pageDispatch: Dispatch<PageAction>) => {
    pageDispatch({ type: 'PREVIOUS_PAGE' });
};