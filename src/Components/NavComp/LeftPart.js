import React from 'react'
import { FcMenu } from "react-icons/fc";
import { AiFillYoutube } from "react-icons/ai";

const LeftPart = () => {
    return (
        <div className='leftPart'>
            <button className='iconButton'><FcMenu className='menu icon' /></button>
            <button className='iconButton'><AiFillYoutube className='logo icon' /></button>
            <span className='appName'>YouTube<sup className='sup'>NG</sup></span>
        </div>
    )
}

export default LeftPart