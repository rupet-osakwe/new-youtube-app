import React, { useState } from 'react'
import RightPart from './Right-Part'
import LeftPart from './LeftPart'
import SearchBar from './SearchBar'


export const NavBar = () => {
    const [displaySearchMedia, setDisplaySearchMedia] = useState(false)
    return (
        <div className='navBar'>
            {!displaySearchMedia && <LeftPart />}
            {<SearchBar displaySearchMedia={displaySearchMedia} setDisplaySearchMedia={setDisplaySearchMedia} />}
            {!displaySearchMedia && <RightPart displaySearchMedia={displaySearchMedia} setDisplaySearchMedia={setDisplaySearchMedia} />}
        </div>
    )
}
