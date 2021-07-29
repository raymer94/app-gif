import React, { useEffect, useState } from 'react';

 const AddCategory = (props)=>{
     
    const [inputValue, setInputValue] = useState('Naruto');

    const handleInput = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.setCategories([...props.categories, inputValue])
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInput}/>
        </form>
    )
}
export default AddCategory;