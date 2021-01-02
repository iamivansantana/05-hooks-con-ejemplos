import {  createContext, useState } from "react";


export const DataContext = createContext();

import React from 'react'

const DataFixed = {
    nombre:'ivan',
    apellido:'ojendis',
    edad:26
}

const DataProvider = ({children}) => {

    const  [data, setData] = useState(DataFixed);

    return (
        <DataContext.Provider
        value={{
            data,
            setData
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
