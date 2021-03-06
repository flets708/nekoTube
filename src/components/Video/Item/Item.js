import React from 'react'

export default function Item(props) {
    console.log("propsを受け取りました");
    console.log(props.video);
    return (
        <li className='list-group-item' onClick={() => props.onVideoClicked(props.video)}>
            <div className='videp-list media'>
                <div className='media-left'>
                    <img className='mr-3' src={props.video.snippet.thumbnails.default.url} alt="error"/>
                </div>
                <div className='media-body'>
                    <h5 className='media-heading'>
                        {props.video.snippet.title}
                    </h5>
                </div>
            </div>
            
        </li>
    )
}
