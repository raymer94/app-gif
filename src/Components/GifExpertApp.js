import React, { useEffect, useState } from 'react';

import AddCategory from './AddCatergory'
import GifGrid from './GifGrid'

const GifExpertApp = () =>{

    const [categories, setCategories] = useState("");

    useEffect(()=>{
        setCategories(['One Punch'])
    }, [])

    const handleAdd = () =>{
        setCategories([...categories, 'naruto']);
      
    }
    console.log(categories)
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories={setCategories}/>
            {<GifGrid key={categories} category={categories}/>}
            <button onClick={handleAdd}>Agregar</button>
        </>
    )
}
 
export default GifExpertApp;

