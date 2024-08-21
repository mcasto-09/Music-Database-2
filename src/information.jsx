import axios from "axios"
import React from "react"
import musicRouter from "../server/routes/music.routes"

function Information () {
    axios.get (
            `https://api.discogs.com/songs`
        )
        .then((response) => {
            const posts = response.data
            this.setState({posts});
        })
        

    return (
        <div className="h-screen bg-blue-300"> Information Component</div>
    )
}

export default Information 