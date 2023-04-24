import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';

const Element = ({ field: { jsonKey, uiType, label, placeholder, value,  validate} }) => {
    console.log('In elements file', { jsonKey, uiType, label, placeholder, value,  validate} );
    switch (uiType) {
        case 'Input':
            return (<Input
                jsonKey={jsonKey}
                label={label}
                placeholder={placeholder}
                value={value}
            />)
        case 'Select':
            return (<Select
                jsonKey={jsonKey}
                label={label}
                placeholder={placeholder}
                value={value}
                options={validate.options}
            />)
        case 'checkbox':
            return (<Checkbox
                jsonKey={jsonKey}
                label={label}
                value={value}
            />)

        default:
            return null;
    }


}

export default Element
