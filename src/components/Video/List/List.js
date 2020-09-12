import React from 'react'
import Item from '../Item/Item'

export default function List(props) {
    // console.log("propsを受け取りました");
    // console.log(props.videos);
    const Items = props.videos.map((video) => {
        return <Item video={video} key={video.id.videoId}/>
    })

    return (
        <ul className="col-md-4 list-group">
            { Items }
        </ul>
    )
}
