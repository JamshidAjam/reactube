import React from 'react';
// import { YouTube, SearchRequest } from 'youtube-search-google-api'
// import ytDurationFormat from 'youtube-duration-format';
// import youtubeFinder from 'youtube-finder';
// import yt from 'youtube-api-v3-search';



const myKey = 'AIzaSyDWm0oPtw7xJETRqXUtyVHzwR2AIFE1wJk';
const NewTest = () => {

//    https://www.googleapis.com/youtube/v3/videos?id=9bZkp7q19f0&part=contentDetails&key={myKey}

    const options = {
        q: 'nodejs',
        part: 'snippet',
        type: 'video'
    }
    yt(myKey, options, (err, data) => {
        // console.log(data);
    });


    return (
        <div>
            here is the test
        </div>
    );
    // var client = youtubeFinder.createClient({ key: 'AIzaSyDWm0oPtw7xJETRqXUtyVHzwR2AIFE1wJk' })
    // var params = {
    //     part: 'snippet',
    //     q: 'Still into You paramore',
    //     maxResults: 5
    // }
    // client.search(params, function (err, data) {
    //     console.log(data);
    // })

    // const youtube = new YouTube()

    // youtube.search(new SearchRequest(
    //     {
    //         query: {
    //             // key: 'AlzaSydu39i6-bseHDgCfG_SNE_hQwuGdc53Vws',
    //             key: 'AIzaSyDWm0oPtw7xJETRqXUtyVHzwR2AIFE1wJk',
    //             maxResults: 10,
    //             order: 'viewCount',
    //             type: 'video',
    //             publishedAfter: '2017-10-01T00:00:00Z',
    //             q: 'Pink Floyd'
    //         }
    //     }, function (error, response, body) {
    //         if (error) console.log(error);
    //         // console.log(JSON.parse(body));
    //     }))
    // //https://www.youtube.com/watch?v=3j8mr-gcgoI
    //     var youtubeTime = "PT15M31S";
    //     var duration = ytDurationFormat(youtubeTime);
    //     console.log(duration);
}

export default NewTest;