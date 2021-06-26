export const login = (data) => {
    return async(dispatch) => {
        try{
            dispatch({
                type:'LOGIN',
                payload: data
            })
        }
        catch(err){
            console.log(err, 'err login')
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        try{
            dispatch({
                type:'LOGOUT',
                payload: ''
            })
        }
        catch(err){
            console.log(err, 'err logout')
        }
    }
}