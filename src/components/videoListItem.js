import React from 'react';

const videoListItem = ({video, onVideoSelect}) => {
    const imgUrl = video.thumbnails.medium.url;

    return (
        <div onClick={() => onVideoSelect(video)} className="col s12 m6 l3">
            <div className="card">
                <div className="card-image">
                    <img src={imgUrl} alt="preview" />
                </div>
                <div className="card-content">
                    <span className="card-title">
                        {(video.title.length > 25) ? 
                            video.title = video.title.substring(0, 25) + "..." : 
                            video.title}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default videoListItem;



