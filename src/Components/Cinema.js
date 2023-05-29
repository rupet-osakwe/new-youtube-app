// import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { SearchDispatchContext, searchContext } from '../State/StateManager'
import moment from 'moment/moment'

const Cinema = () => {
    const setVideos = useContext(SearchDispatchContext)
    const videos = useContext(searchContext)

    const fetchStation = async () => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=20&key=${process.env.REACT_APP_YoutubetvKey}`)
        const newStation = response.data.items
        setVideos(newStation)
        console.log(newStation)
    }
    useEffect(() => {
        fetchStation()

    }, [])

    return (
        <div className='screensHolder'>
            <div className='screenList'>
                {videos.map((video, index) => (
                    <div key={index}>
                        <iframe className='screen' title={video.snippet.title} allowFullScreen src={`https://www.youtube.com/embed/${typeof (video.id) === "object" ? video.id.videoId : video.id}`} >
                        </iframe>
                        <div className='videoInfo'>
                            <h3 className='vid-title'>{video.snippet.title}</h3>
                            <span className='channelName'>{video.snippet.channelTitle}</span>
                            <span className='pubTime'>{moment(video.snippet.publishTime).fromNow()
                            }</span>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Cinema