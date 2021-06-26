import React from 'react'
import NavbarComponent from '../component/navbar'
import NavbarMobileComponent from '../component/navbarMobile'
import SideNavComponent from '../component/sidenav'
import { useMediaQuery } from 'react-responsive'
import { Button, Image } from 'react-bootstrap'
import { Input, InputGroup, Icon } from 'rsuite'
import { useDispatch, useSelector } from 'react-redux'
import { getPersonelDataPage, getNextPersonelDataPage } from '../action'

const PersonelListPage = () => {
    const [pageNumber, setPageNumber] = React.useState(1)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 992px)'
    })
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getPersonelDataPage(pageNumber))
        dispatch(getNextPersonelDataPage(pageNumber))
    }, [pageNumber])

    const { data, nextData } = useSelector((state) => {
        return {
            data: state.dataPersonelReducer.paginateData,
            nextData: state.dataPersonelReducer.nextPaginate
        }
    })

    const prevbtn = () => {
        if (pageNumber > 1) {
            setPageNumber(prev => prev - 1)
        }
    }
    const nextbtn = () => {
        if (nextData.length !== 0) {
            setPageNumber(prev => prev + 1)
        }
    }
    return (
        <div>
            {isDesktopOrLaptop ?
                <div>
                    <NavbarComponent />
                    <div id='ContainSideNav'>
                        <SideNavComponent />
                        <div id='contain-content'>
                            <div style={{ padding: 20, height: 667, width: 1000, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ margin: 20, flexGrow: 1, display: 'flex', justifyContent: 'space-between' }} >
                                    <div style={{ flexGrow: 2 }}>
                                        <div style={{ margin: 10 }}>
                                            <h2 style={{ color: '#81ecec' }}>PERSONNEL LIST</h2>
                                            <p style={{ fontSize: 20 }}>List of all personnels</p>
                                        </div>
                                    </div>
                                    <div style={{ flexGrow: 2 }}>
                                        <div style={{ margin: 10, marginTop: 30, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <InputGroup style={{ width: 200, height: 40 }} >
                                                <InputGroup.Addon>
                                                    <Icon icon='search' style={{ color: '#81ecec' }} />
                                                </InputGroup.Addon>
                                                <Input placeholder='Search Personel' />
                                            </InputGroup>
                                            <Button style={{ backgroundColor: '#81ecec', fontWeight: 'bold' }}>ADD PERSONNEL <Icon icon='plus' /></Button>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ margin: 20, flexGrow: 9.5, display: 'flex' }} >
                                    {data ?
                                        data.map((item, index) => {
                                            return (
                                                <div key={index} style={{ flexGrow: 1, padding: 10, display: 'flex' }}>
                                                    <div style={{ flexGrow: 1 }}>
                                                        <div style={{ display: 'flex' }}>
                                                            <div style={{ display: 'flex', flexGrow: 3 }}>
                                                                <p style={{ marginTop: 6 }}>Personel ID :</p>
                                                                <p style={{ color: '#81ecec', fontWeight: 'bold', marginLeft: 5 }}>{item.login.salt.toUpperCase()}</p>
                                                            </div>
                                                            <div style={{ flexGrow: 1 }}>
                                                                <Icon icon='ellipsis-h' style={{ marginTop: 10 }} />
                                                            </div>
                                                        </div>
                                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                                                            <Image src={item.picture.large} roundedCircle />
                                                        </div>
                                                        <div>
                                                            <p style={{ fontSize: 16, fontWeight: 'bold' }}>Name</p>
                                                            <p style={{ fontSize: 16, color: '#b2bec3' }}>{item.name.first + ' ' + item.name.last}</p>
                                                            <p style={{ fontSize: 16, fontWeight: 'bold' }}>Telephone</p>
                                                            <p style={{ fontSize: 16, color: '#b2bec3' }}>{item.cell}</p>
                                                            <p style={{ fontSize: 16, fontWeight: 'bold' }}>Birthday</p>
                                                            <p style={{ fontSize: 16, color: '#b2bec3' }}>{item.dob.date.split('T')[0]}</p>
                                                            <p style={{ fontSize: 16, fontWeight: 'bold' }}>Email</p>
                                                            <p style={{ fontSize: 16, color: '#b2bec3' }}>{item.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <></>
                                    }
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <div onClick={prevbtn} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Icon icon='arrow-left-line' style={pageNumber > 1 ? { fontSize: 30, color: 'black' } : { fontSize: 30, color: 'lightgray' }} />
                                        <div>
                                        <p style={pageNumber > 1 ? { fontSize: 16, color: 'black' } : { fontSize: 16, color: 'lightgray' }}>Previous Page</p>

                                        </div>
                                    </div>
                                    <div onClick={nextbtn} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div>
                                        <a style={nextData.length !== 0 ? { fontSize: 16, color: 'black' } : { fontSize: 16, color: 'lightgray' }}>Next Page</a>
                                        </div>
                                        <Icon icon='arrow-right-line' style={nextData.length !== 0 ? { fontSize: 30, color: 'black' } : { fontSize: 30, color: 'lightgray' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                :
                <div>
                    <NavbarMobileComponent />
                    <div style={{ display: 'flex', justifyContent: 'center', }}>
                        <div style={{ display: 'flex', flexDirection: 'column', margin: 10, height: '100%', width: 300, backgroundColor: '#dfe6e9' }}>
                            <div style={{ margin: 10, backgroundColor: 'white' }}>
                                <div style={{ margin: 10 }}>
                                    <h3 style={{ color: '#81ecec' }}>PERSONNEL LIST</h3>
                                    <p style={{ fontSize: 20 }}>List of all personnels</p>
                                </div>
                                <div style={{ margin: 10 }}>
                                    <InputGroup style={{ width: 260, height: 40 }} >
                                        <InputGroup.Addon>
                                            <Icon icon='search' style={{ color: '#81ecec' }} />
                                        </InputGroup.Addon>
                                        <Input placeholder='Search Personel' />
                                    </InputGroup>
                                    <Button style={{ backgroundColor: '#81ecec', fontWeight: 'bold', marginTop: 10 }}>ADD PERSONNEL <Icon icon='plus' style={{ marginLeft: 91 }} /></Button>
                                </div>
                            </div>
                            <div>
                                {data ?
                                    data.map((item, index) => {
                                        return (
                                            <div key={index} style={{ flexGrow: 1, margin: 10, display: 'flex', backgroundColor: 'white', borderRadius:6 }}>
                                                <div style={{ flexGrow: 1 }}>
                                                    <div style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', flexGrow: 3 }}>
                                                            <p style={{ marginTop: 6 }}>Personel ID :</p>
                                                            <p style={{ color: '#81ecec', fontWeight: 'bold', marginLeft: 5 }}>{item.login.salt.toUpperCase()}</p>
                                                        </div>
                                                        <div style={{ flexGrow: 1 }}>
                                                            <Icon icon='ellipsis-h' style={{ marginTop: 10 }} />
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', marginTop: 5 }}>
                                                        <Image src={item.picture.large} roundedCircle/>
                                                        <div>
                                                            <p style={{ fontSize: 16, fontWeight: 'bold' }}>Name</p>
                                                            <p style={{ fontSize: 16, color: '#b2bec3' }}>{item.name.first + ' ' + item.name.last}</p>
                                                            <p style={{ fontSize: 16, fontWeight: 'bold' }}>Telephone</p>
                                                            <p style={{ fontSize: 16, color: '#b2bec3' }}>{item.cell}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <></>
                                }
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <div onClick={prevbtn} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Icon icon='arrow-left-line' style={pageNumber > 1 ? { fontSize: 30, color: 'black' } : { fontSize: 30, color: '#b2bec3' }} />
                                        <p style={pageNumber > 1 ? { fontSize: 16, color: 'black' } : { fontSize: 16, color: '#b2bec3' }}>Previous Page</p>
                                    </div>
                                    <div onClick={nextbtn} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <a style={nextData.length !== 0 ? { fontSize: 16, color: 'black' } : { fontSize: 16, color: '#b2bec3' }}>Next Page</a>
                                        <Icon icon='arrow-right-line' style={nextData.length !== 0 ? { fontSize: 30, color: 'black' } : { fontSize: 30, color: '#b2bec3' }} />
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default PersonelListPage
