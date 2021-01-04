import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutPage = () => {


  const {user,setUser} = useContext(UserContext);

  const handleLogout = ()=>{
    setUser({});
  }

    return (
        <>
          <h1>About Page</h1>  
          <hr />
          <pre >
            {JSON.stringify(user,null,4)}
          </pre>

          <button 
            className="btn btn-warning"
            onClick={handleLogout}  
          >
            Logout
          </button>
        </>
    )
}
