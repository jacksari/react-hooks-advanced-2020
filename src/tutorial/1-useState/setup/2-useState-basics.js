import React, { useState } from 'react';


const UseStateBasics = () => {
  const [text, setText] = useState('Hola mundo');
    const handleChange = () => {
        if(text === 'Hola mundo'){
            setText('Jack Sari')
        }else {
            setText('Hola mundo')
        }
    }

  return (
      <div>
        <h2>{text}</h2>
          <button className="btn" type="button" onClick={handleChange}>Change</button>
      </div>
  );
};

export default UseStateBasics;
