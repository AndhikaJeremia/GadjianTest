import React from 'react'
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


const Logout = () => {
    const [goHome, setGoHome] = React.useState(false)
    if(goHome){
        return(
            <Redirect to='/' />
        )
    }
    return (
        <div>
            <h1>Loged Out</h1>
            <Button onClick={()=>setGoHome(true)}>Go Home</Button>
        </div>
    )
}

export default Logout