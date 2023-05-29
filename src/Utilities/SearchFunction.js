import React from 'react'
import axios, { Axios } from 'axios'

const SearchFunction = async (keyword) => {
    const response = await axios.get(` https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${keyword}&maxResults=25&key=${process.env.REACT_APP_YoutubetvKey}`)
    const result = response.data.items
    return result
}



export default SearchFunction