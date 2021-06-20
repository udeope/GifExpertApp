import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {        
         
        setCategories( cats => [inputValue, ...cats ]);
        setInputValue('');

        } 
    }

    return (
        //<> Aqui no es necesario fragmento pq form tb agrupa
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                
            />
            <div id='error'></div>
            </form>   
        //</>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}

export default AddCategory;
