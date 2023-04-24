import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ jsonKey, label, placeholder, value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <>
        
        <div className="flex flex-row">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input type="text" className="border-2 border-slate-950 ml-6" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={event => handleChange(jsonKey, event)}
            />
        </div>
        <h2>Pasta Type</h2>
        </>
    )
}

export default Input
