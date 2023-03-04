import React, { useState } from 'react'
import { Route, RouterProps } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'
import Login from '../pages/Login/Login'

const PrivateRouter = ():JSX.Element => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

   return <Route path="/" element={isLoggedIn ? <Admin /> : <Login/>} />
}

export default PrivateRouter
