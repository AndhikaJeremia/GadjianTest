import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../action'

const NavbarMobileComponent = () => {
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
                <Navbar.Brand href="#home">Gadjian</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {Username ?
                        <Nav>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/personnel_list'>Personnel List</Nav.Link>
                            <Nav.Link as={Link} to='/daily_attendance'>Daily Attendance</Nav.Link>
                            <NavDropdown title={Username} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={btnLogout} as={Link} to='/logout'>Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarMobileComponent