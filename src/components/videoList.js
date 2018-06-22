import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.id} 
                video={video} />
            );
    });
    return (
        <div className="row video-list">
            {videoItems}
        </div>
    );
}

export default VideoList;