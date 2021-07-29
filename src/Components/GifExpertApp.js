import React, { useEffect, useState } from 'react';

import AddCategory from './AddCatergory'

const GifExpertApp = () =>{

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        setCategories(['One Punch', 'Samurai X', 'Dragon Ball'])
    }, [])

    const handleAdd = () =>{
        setCategories([...categories, 'naruto']);
      
    }
    console.log(categories)
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories={setCategories} categories={categories}/>
            {categories.map((a)=> <h1 key={a}>{a}</h1>)}
            <button onClick={handleAdd}>Agregar</button>
        </>
    )
}
 
export default GifExpertApp;

