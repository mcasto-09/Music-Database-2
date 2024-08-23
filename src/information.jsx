import axios from "axios"
import React, { useEffect, useState } from "react"

function Information (){



}

export default Information








// function Information () {
//     const [allArtistData, setAllArtistData] = useState([])
//     const getAllArtist = () => {
//         axios.get('/api/artists').then(res => {
//             setAllArtistData(res.data)
//         })
//         console.log(allArtistData)
//     }

//     useEffect(() => {
//         getAllArtist()
//     }, [])


//     return (
//         <section>
//         <div className="h-screen bg-white" >
//         {allArtistData.map((artist, i) => {
//             if (i > 10) {
//                 // console.log(song)
//                 return
//             }

//             return (
//             <div className="pt-2 pl-20" key = {i}>
//                 <p>{artist},</p>
                
//             </div>
//             )
//         })}
//         </div>
//         </section>
//     )
// }

// export default Information 

    // axios.get (
    //         `/api/music/songs`
            
    //     )
    //     .then((response) => {
    //         const posts = response.data
    //         setIndex0 (posts)
    //     })
    //     console.log(index0)