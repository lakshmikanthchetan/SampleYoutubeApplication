import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelection }) => {
    const VideoListItems = videos.map((video)=> {
        return <VideoListItem key={video.etag} video={video} onVideoSelection={onVideoSelection}/>
    });

    return (
        <ul className='col-md-4 list-group'>
            {VideoListItems}
        </ul>
    );
}

export default VideoList;