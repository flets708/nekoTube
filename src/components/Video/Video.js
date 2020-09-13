import React from 'react'

export default function Video(props) {

    console.log(props.video);

    if(!props.video){
        return(
            <div className="video col-md-8">
                動画を読み込み中でーす
            </div>
        )
    }

    let ts = Date.parse(props.video.snippet.publishedAt);
    let dt = new Date(ts);
    let uploadYear = dt.getFullYear();
    let uploadMonth = dt.getMonth() + 1;
    let uploadDay = dt.getDate();
    let uploadDate = "Uploaded at：" + uploadYear + "/" + uploadMonth + "/" + uploadDay 


    const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;

    return (
        <div className='video col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className="embed-responsive-item" src={videoURL} title={props.video.id.videoId}></iframe>
            </div>
            <div className='info'>
                <h4 className="mt-2 font-weight-bold">{props.video.snippet.title}</h4>
                <div className="">{props.video.snippet.description}</div>
                <div className="small font-weight-light font-italic text-muted">{uploadDate}</div>

            </div>
        </div>
    )
}
