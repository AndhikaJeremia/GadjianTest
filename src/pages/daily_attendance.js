import React from 'react'
import NavbarComponent from '../component/navbar'
import NavbarMobileComponent from '../component/navbarMobile'
import SideNavComponent from '../component/sidenav'
import { useMediaQuery } from 'react-responsive'

const Daily_attendance = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 992px)'
    })
    return (
        <div>
            {isDesktopOrLaptop ?
                <div>
                    <NavbarComponent />
                    <div id='ContainSideNav'>
                        <SideNavComponent />
                        <div id='contain-content'>
                            <div style={{ height: '100%', width: 800, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ margin: 20, flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
                                    <div>
                                        <h1 style={{ color: '#81ecec' }}>This is Daily Attendance</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <div>
                    <NavbarMobileComponent />

                    <div style={{ margin: 20, flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <h1 style={{ color: '#81ecec' }}>This is Daily Attendance</h1>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}

export default Daily_attendance