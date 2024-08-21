import axios from "axios"
import React, { useEffect, useState } from "react"


function Information () {
    const [allSongData, setAllSongData] = useState([])
    const getAllSongs = () => {
        axios.get('/api/music/songs').then(res => {
            setAllSongData(res.data)
        })
        console.log(allSongData)
    }

    useEffect(() => {
        getAllSongs()
    }, [])


    return (
        <section>
        <div className="h-screen bg-white">
        {allSongData.map((song, i) => (
            <p key={i}>{song}</p>
        ))}
        </div>
        </section>
    )
}

export default Information 


    // axios.get (
    //         `/api/music/songs`
            
    //     )
    //     .then((response) => {
    //         const posts = response.data
    //         setIndex0 (posts)
    //     })
    //     console.log(index0)