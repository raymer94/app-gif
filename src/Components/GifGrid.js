import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem'

const GifGrid =  ({category}) =>{

    const {data:images, loading} = useFetchGifs(category);
    // const [gifs, setGifs] = useState([]);

    // useEffect(()=>{ 
    //     getGif(category)
    //         .then(setGifs)
    // },[category])
     
    return( 
        <>
            <h3>{category}</h3>
            <div className="card-grid"> 
                {images.map(gif => (
                    <GifGridItem key={gif.id} img={gif}/>
                    )
                    )}            
            </div>
       </>
    )
}

export default GifGrid