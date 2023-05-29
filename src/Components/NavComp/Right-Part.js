import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
function RightPart(props) {
    const { displaySearchMedia, setDisplaySearchMedia } = props
    return (
        <div className='rightPart'>
            <button type='submit' className='iconButton  smallScreenLense-btn' onClick={() => setDisplaySearchMedia(true)}><AiOutlineSearch className='icon lense' /></button>
            <button className={`smallScreen-microphone ${displaySearchMedia ? 'smallScreen-microphone' : 'hide-toggle-button'}`} ><HiMicrophone className='icon' /></button>

            <button className='iconButton'><RiVideoAddLine className='icon' /></button>
            <button className='iconButton'><CiBellOn className='icon' /></button>
            <button className='iconButton'><RxAvatar className='icon' /></button>


        </div>
    )
}

export default RightPart