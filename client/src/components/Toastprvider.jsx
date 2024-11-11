import React from 'react';
import { Toaster } from 'react-hot-toast';

const Toastprvider = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};


export default Toastprvider