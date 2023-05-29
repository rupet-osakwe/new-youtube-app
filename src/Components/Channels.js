import React, { useContext, useState } from 'react'
import axios from 'axios'
import progs from '../Utilities/Progs'
import '../App.css'
import SearchFunction from '../Utilities/SearchFunction'
import { SearchDispatchContext, searchContext } from '../State/StateManager'

const Channels = () => {
    const setGetProg = useContext(SearchDispatchContext)
    const [selected, setSelected] = useState(false)
    const [clickAll, setClickAll] = useState(true)

    const handleButtonClick = async (prog) => {
        setSelected(prog.progIndex)
        setClickAll(false)
        console.log('you clicked', prog.name)
        const result = await SearchFunction(prog.name)
        console.log(result)
        setGetProg(result)
    }

    const handleAll = async () => {


        console.log('you clicked the all button')
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?&part=snippet&type=video&maxResult=46&key=${process.env.REACT_APP_YoutubetvKey}`)
        const result = response.data.items
        setClickAll(true)
        setGetProg(result)
        setSelected(false)
        return


    }

    return (


        <div className='channelButtons'>
            <button className={`all-Button ${clickAll ? 'ActiveProg' : "inactiveAllButton"}`} onClick={handleAll}>All</button>
            {progs.map((prog) => (
                < button className={`programme ${prog.progIndex === selected ? 'ActiveProg' : ''}`} key={prog.progIndex} progindex={prog.progIndex} onClick={() => handleButtonClick(prog)}  >{prog.name}</button>
            ))}
        </div>

    )
}

export default Channels