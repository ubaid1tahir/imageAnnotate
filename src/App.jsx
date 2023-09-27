import React, { useState, useEffect } from 'react';
import Annotation from 'react-image-annotation'; // make sure you have the correct import path
import dashboard from './dashboard.jpg'

const style = {
  padding: "10px"
}




function App() {
  const [annotations, setAnnotations] = useState([]);
   const [annotation, setAnnotation] = useState({});

    const onChange = (newAnnotation) => {
    setAnnotation(newAnnotation);
  };


  const onSubmit = (newAnnotation) => {
        const { geometry, data } = newAnnotation;
        setAnnotations(prevAnnotations => [
          ...prevAnnotations,
          {
            geometry,
            data: {
              ...data,
              id: Math.random(),
            },
          },
        ]);
        setAnnotation({});
      };
  


  return (
    <>
    <Annotation
        src={dashboard}
        annotations={annotations}
        value={annotation}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default App;



