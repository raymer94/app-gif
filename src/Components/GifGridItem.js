import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem =  ({img: {title, url}}) =>{
    return (
         <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem

GifGridItem.propTypes = {
    img: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })   
}
