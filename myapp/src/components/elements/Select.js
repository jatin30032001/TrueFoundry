import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ({ jsonKey, label, placeholder, value, options }) => {
    const { handleChange } = useContext(FormContext)
    console.log("In select file",{ jsonKey, label, placeholder, value, options })
    return (
        <div className='flex flex-row justify-between'>
            <label className="mx-2">{label}</label>
            <select className="" aria-label="Default select example"
                onChange={event => handleChange(jsonKey, event)}
                placeholder={placeholder}            >
                <option >Open this select menu</option>
                {options.length > 0 && options.map((option, i) =>
                    <option value={option.value} key={i}>{option.label}</option>

                )}

            </select>
        </div>
    )
}

export default Select
