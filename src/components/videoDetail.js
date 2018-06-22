import React from 'react'

const videoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id;
    const url = `http://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail">
            <div className="video-container">
                <iframe 
                    title={video.title}
                    width="853" 
                    height="480" 
                    src={url} 
                    frameBorder="0" 
                    allowFullScreen >
                </iframe>
            </div>
            <div className="video-detail-title">{video.title}</div>
            <div className="video-detail-desciption">{video.description}</div><hr />
        </div>
    );
}

export default videoDetail;

// this is for responsive one
// <video class="responsive-video" controls>
//     <source src="movie.mp4" type="video/mp4">
// </video>
        