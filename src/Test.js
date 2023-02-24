import React, { useEffect } from 'react'
import axios from 'axios'
const Test = () => {
    const tess=async()=>{
        const test = await axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=xxx...')
        console.log(test)
    }
    useEffect(()=>{
       tess()
    },[])
  return (
    <div>Test</div>
  )
}

export default Test