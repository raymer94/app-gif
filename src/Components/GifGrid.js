import React, { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem'

const GifGrid =  ({category}) =>{

    const state = useFetchGifs();
    // const [gifs, setGifs] = useState([]);

    // useEffect(()=>{
    //     getGif(category)
    //         .then(setGifs)
    // },[category])
     
    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid"> 
                {gifs.map(gif => (
                    <GifGridItem key={gif.id} img={gif}/>
                    )
                    )}            
            </div>
       </>
    )
}

export default GifGrid