const INITIAL_STATE = {
    username: ''
}

const dataUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                username: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                username:''
            }
        default:
            return state
    }
}

export default dataUserReducer