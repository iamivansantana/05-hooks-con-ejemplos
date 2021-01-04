import React from 'react'
import { AppRouter } from './AppRouter'
import UserProvider from './UserContext'

export const MainApp = () => {
    return (
        <>
        <UserProvider>
          <AppRouter />
        </UserProvider>
        </>
    )
}
