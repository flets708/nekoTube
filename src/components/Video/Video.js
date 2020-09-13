import React from 'react'

export default function Video(props) {

    // console.log(props.video);

    if(!props.video){
        return(
            <div className="video col-md-8">
                動画を読み込み中でーす
            </div>
        )
    }

    const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;

    return (
        <div className='video col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className="embed-responsive-item" url={videoURL} title={props.video.id.videoId}></iframe>
            </div>
            <div className='info'>
                <h4 className="mt-2 font-weight-bold">{props.video.snippet.title}</h4>
                <div>{props.video.snippet.description}</div>

            </div>
        </div>
    )
}
