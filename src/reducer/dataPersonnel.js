const INITIAL_STATE = {
    AllPersonel: [],
    paginateData: [],
    nextPaginate: []
}

const dataPersonelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_PERSONEL':
            return{
                ...state,
                AllPersonel: action.payload
            }
        case 'PAGINATE_DATA':
            return{
                ...state,
                paginateData: action.payload
            }
        case 'NEXT_PAGINATE_DATA':
            return{
                ...state,
                nextPaginate: action.payload
            }
        default:
            return state        
    }
}

export default dataPersonelReducer