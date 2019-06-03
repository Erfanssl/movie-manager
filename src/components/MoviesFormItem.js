import React from 'react';

const MoviesFormItem = ({ label, id, small, value, onDataChange }) => {
    return (
        <div className="col text-center mb-2">
            <label htmlFor={ id }>{ label }</label>
            <input onChange={ onDataChange } className="form-control movies-form__item" id={ id } type="text" value={ value }/>
            <small>{ small }</small>
        </div>
    );
};

export default MoviesFormItem;