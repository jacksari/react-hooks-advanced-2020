import React, { useState } from 'react';


const UseStateBasics = () => {
  const [text, setText] = useState('Hola mundo 123');
    const handleChange = () => {
        if(text === 'Hola mundo 123'){
            setText('Jack Sari')
        }else {
            setText('Hola mundo 123')
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
