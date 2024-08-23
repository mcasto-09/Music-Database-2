import express from 'express';
import { Router } from 'express';
import axios from 'axios';

const musicRouter = Router();
const apiToken = '3303cf4f3f1340d09fc972b6b6c41604';

musicRouter.get('/artist', async (req, res) => {

})

export default musicRouter








// musicRouter.get('/songs', async (req, res) => {
//     try {
//         const musicResponse = await axios.get(`${apiUrl}/database/search`, {
//             params: {
//                 type: 'artist',
//                 token: apiToken,
//                 page: 1,
//                 per_page: 15
//             }
//         });

//         const releases = musicResponse.data.results;
//         const artist = [];

//         for ( let i = 0; i < 10; i++  ) {
//             const release = releases[i]
//             const releaseDetails = await axios.get(release.resource_url, {
//                 params: { token: apiToken }
//             });
//             console.log(releaseDetails.data)
//             const tracklist = releaseDetails.data.tracklist;
//             artist.push(...tracklist.map(track => {
                
//                 return {artist:artist.title}
                
//             }));
//         }

//         res.json(artist);
//     } catch (error) {
//         console.error('Error fetching data from Discogs:', error);
//         res.status(500).json({ error: 'An error occurred while fetching data from Discogs' });
//     }
// });

// export default musicRouter 