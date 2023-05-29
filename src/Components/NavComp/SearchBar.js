import React, { useContext, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";
import SearchFunction from '../../Utilities/SearchFunction';
import { SearchDispatchContext } from '../../State/StateManager';

const SearchBar = (props) => {
    const setVideos = useContext(SearchDispatchContext)
    const [fetchByWord, setFetchByWord] = useState("")
    const { displaySearchMedia, setDisplaySearchMedia } = props
    const handleChange = (event) => {
        setFetchByWord(event.target.value)
    }
    const handleFetch = async (event) => {
        event.preventDefault()
        const result = await SearchFunction(fetchByWord)
        setVideos(result)
        setFetchByWord('')
        console.log(result)
    }
    return (
        <div className='searchBarContainer'>
            <button className={`iconButton arrowLeft icon ${displaySearchMedia ? 'show-toggle-button iconButton' : 'hide-toggle-button'}`} onClick={() => setDisplaySearchMedia(false)}><FaArrowLeft /></button>
            <form onSubmit={handleFetch} className='inputAndLense' style={{ display: displaySearchMedia ? 'flex' : '' }} >
                <input type='text' className='inputBox' placeholder='Search' value={fetchByWord} onChange={handleChange} />
                <button type='submit' className='iconButton lense-icon-button ' disabled={fetchByWord === ""}><AiOutlineSearch className='icon lense' /></button>
            </form>

            <button className=' desktop-microphone-button' style={{ display: displaySearchMedia ? 'block' : "" }}><HiMicrophone className='microphone' /></button>
        </div>
    )
}

export default SearchBar