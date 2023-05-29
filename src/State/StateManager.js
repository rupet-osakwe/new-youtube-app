import React, { useState } from 'react'
import { createContext, useContext } from 'react'
export const searchContext = createContext(undefined);

export const SearchDispatchContext = createContext(undefined)
const StateManager = ({ children }) => {
    const [search, setSearch] = useState([])
    return <searchContext.Provider value={search}>
        <SearchDispatchContext.Provider value={setSearch}>
            {children}
        </SearchDispatchContext.Provider>
    </searchContext.Provider>

}

export default StateManager