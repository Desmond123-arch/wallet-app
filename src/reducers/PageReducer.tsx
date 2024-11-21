import PageAction from '../types/PageAction'

export const PageReducer = (page: number, action: PageAction) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return page + 1
        case 'PREVIOUS_PAGE':
            return page - 1
        default:
            return page
    }
}
