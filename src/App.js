import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import PersonelListPage from './pages/personel_list'
import Daily_attendance from './pages/daily_attendance'
import LoginPage from './pages/login'
import NotFound from './pages/not_found'
import Logout from './pages/logout'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './action'


export default function App() {
  const dispatch = useDispatch()
  const {username} = useSelector((state) => {
    return{
      username: state.dataUserReducer.username
    }
  })
  React.useEffect(()=> {
    let data = localStorage.getItem('userData')
    if(data !== null){
      let newdata = JSON.parse(data)
      dispatch(login(newdata.username))
    }
  },[username])
  return (
    <div>
      {username ?
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/personnel_list' component={PersonelListPage} />
          <Route path='/daily_attendance' component={Daily_attendance} />
          <Route path='/logout' component={Logout} />
          <Route component={NotFound}/>
        </Switch>
        :
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={LoginPage} />
          <Route path='/logout' component={Logout} />
          <Route component={NotFound}/>
        </Switch>
      }
    </div>
  )
}
