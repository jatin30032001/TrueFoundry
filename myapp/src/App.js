
import formJSON from './formElement.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';

function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON)
  }, [])
  console.log(elements);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(elements)
  }
  const handleChange = (id, event) => {
    
  }
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className='flex flex-col justify-between items-center w-full h-full'>

        <form className='flex flex-col bg-blue-200 '>
     

          {elements ? elements.map((field, i) => {
            console.log(field);

            if (field.uiType === 'Group') {
              return (

                field.subParameters.map((fie) => {
                  console.log(fie);
                  return (<Element key={i} field={fie} />);
                }
                ))
            }
            return (<Element key={i} field={field} />);
          }) : null}
          <button type="submit" className="" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>

      </div>
    </FormContext.Provider>
  );
}

export default App;
