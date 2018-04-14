import React from 'react';

const VideoListItem = ({video, onVideoSelection}) => {
    const videourl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={()=> onVideoSelection(video)} className='list-group-item'>
            <div className = 'video-list media'>
                <div className='media-left'>
                    <img src={videourl} className='media-object' />    
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;