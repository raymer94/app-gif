import React from 'react';

const GifGridItem = ({img: {title, url}}) =>{
    return (
        <div className="card">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
