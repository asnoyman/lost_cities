import React from 'react';
import { useDropzone } from 'react-dropzone';

const CardZone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  /* 
  useDropzone hooks exposes two functions called getRootProps and getInputProps
  and also exposes isDragActive boolean
*/

  return (
    <>
      <div className='card-zone-div' {...getRootProps()}>
        <input className='card-zone-input' {...getInputProps()} />
        <div className='text-center'>
          {isDragActive ? (
            <p className='card-zone-content'>Release to drop the card here</p>
          ) : (
            <p className='card-zone-content'>Drag 'n' drop a card here</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CardZone;
