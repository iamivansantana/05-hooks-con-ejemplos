import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {

    const {user,setUser} = useContext(UserContext);

    const data ={
      id:'123',
      nombre:'ivan',
      edad:26
    }

    return (
        <>
          <h1>Login Page</h1>  
          <hr />
          <pre>
            {JSON.stringify(user,null,4)}
          </pre>
          <button
            className="btn btn-primary"
            onClick={()=>{setUser({
              data
            })}}
          >
            Login
          </button>
        </>
    )
}
