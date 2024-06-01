import React, { useState } from 'react'
import { createContext } from 'react';

export const RadioGroupContext = createContext();

const RadioGroup = ({children,handleChange,groupName}) => {
   
  return (
    <RadioGroupContext.Provider value={{ handleChange, groupName }}>
      {children}
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup