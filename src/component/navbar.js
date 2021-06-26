import React from 'react'
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../action'

const NavbarComponent = () => {
    const dispatch = useDispatch()
    const [Username, setUsername] = React.useState(null)
    React.useEffect(() => {
        let data = localStorage.getItem('userData')
        if (Boolean(data) === true) {
            let newdata = JSON.parse(data)
            setUsername(newdata.username)
        }
    }, [Username])
    const btnLogout = () => {
        localStorage.removeItem('userData')
        localStorage.removeItem('AllPersonel')
        dispatch(logout())
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to='/' style={{ color: '#81ecec', fontSize: 30, fontWeight: 'bold' }}>Gadjian</Navbar.Brand>
                {Username ?
                    <NavDropdown title={Username} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={btnLogout} as={Link} to='/logout'>Log Out</NavDropdown.Item>
                    </NavDropdown>
                    :
                    <Nav>
                        <Button as={Link} to='/login'>Login</Button>
                    </Nav>
                }
            </Navbar>
        </div>
    )
}

export default NavbarComponent