import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Modal } from 'rsuite'
import { Button, } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getAllDataPersonel, login } from '../action'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const dispatch = useDispatch()
    const [Username, setUsername] = React.useState('')
    const [Password, setPassword] = React.useState('')
    const [show, setShow] = React.useState(false)
    const [showWelcome, setShowWelcome] = React.useState(false)

    const btnSubmit = () => {
        if (Username.length > 0 && Password.length > 0) {
            const data = {
                username: Username
            }
            localStorage.setItem('userData', JSON.stringify(data))
            dispatch(getAllDataPersonel())
            setShowWelcome(true)
        }
        if (Username.length === 0 || Password.length === 0) {
            setShow(true)
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <h1 style={{ color: '#81ecec' }}>Log In To Gadjian</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Form layout="inline">
                    <FormGroup>
                        <ControlLabel srOnly>Username</ControlLabel>
                        <FormControl placeholder="Username" name="username" onChange={value => setUsername(value)} />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel srOnly>Username</ControlLabel>
                        <FormControl placeholder="Password" name="password" type="password" onChange={value => setPassword(value)} />
                    </FormGroup>

                    <Button onClick={btnSubmit} >Login</Button>
                </Form>
            </div>
            <Modal show={show} onHide={() => setShow(false)} on>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please Input Username and password</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showWelcome}>
                <Modal.Header>
                    <Modal.Title>Login Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Welcome To Gadjian
                    <Button style={{marginLeft:10}} onClick={() => {
                        setShowWelcome(false)
                        dispatch(login(Username))
                    }} as={Link} to='/'>
                        Go Home
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default LoginPage