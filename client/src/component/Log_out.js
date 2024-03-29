import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../store/auth'
import { Navigate } from 'react-router-dom'

const Log_out = () => {
 
   const {LogoutUser} = useContext(AuthContext)

   useEffect(()=>{
    LogoutUser()
   },[LogoutUser])
   
   return <Navigate to= '/login'></Navigate>
  
}

export default Log_out
