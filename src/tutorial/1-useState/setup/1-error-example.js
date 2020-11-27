import React from 'react';

const ErrorExample = () => {
  let title = 'Jack Sari'
    const handleClick = () => {
      title = 'Hola mundo'
      console.log(title)
    }

  return (
      <React.Fragment>
          <h2>{title}</h2>
          <button type="button" className="btn" onClick={handleClick}>
              change title
          </button>
      </React.Fragment>
  );
};

export default ErrorExample;
