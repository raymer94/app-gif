import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

 const AddCategory = ({setCategories})=>{
     
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCategories(inputValue)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInput}/>
        </form>
    )
}
export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}