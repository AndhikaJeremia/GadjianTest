import React from 'react'
import { Sidenav, Icon, Nav } from 'rsuite'
import { Link } from 'react-router-dom'

const SideNavComponent = () => {
    const [Username, setUsername] = React.useState('')
    
    React.useEffect(() => {
        let data = localStorage.getItem('userData')
        if (Boolean(data) === true) {
            let newdata = JSON.parse(data)
            setUsername(newdata.username)
        }
    }, [Username])
    return (
        <div>
            {
                Username ?
            <Sidenav style={{ height: "100vh" }} >
                <Sidenav.Body>
                    <Nav>
                        <Link to='/' id="RouterNavLink" >
                            <Nav.Item as={Link} to='/' icon={<Icon icon="home"/>} eventKey='1' > Home </Nav.Item>
                        </Link>
                        <Link  to='/personnel_list' id="RouterNavLink" >
                            <Nav.Item icon={<Icon icon='group'/>} eventKey='2' >  Personnel List </Nav.Item>
                        </Link>
                        <Link to='/daily_attendance' id="RouterNavLink" >
                            <Nav.Item icon={<Icon icon='calendar'/>} eventKey='3' > Daily attendance </Nav.Item>
                        </Link>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
                :
                <Sidenav style={{ height: "100vh" }} >
                <Sidenav.Body>
                    <Nav>
                        <Link to='/' >
                            <Nav.Item icon={<Icon icon="home"/>} eventKey='1' > Home </Nav.Item>
                        </Link>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            }
        </div>
    )
}

export default SideNavComponent