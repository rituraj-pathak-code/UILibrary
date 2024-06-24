import React, { useState } from "react";
import styles from "./index.module.css";

import passwordIcon from '/assets/eye.png'
import passwordIconCrossed from '/assets/eye_crossed.png'


const TextField = ({
  type = "text",
  category = "",
  size,
  placeholder = "",
  name = "",
  width,
  background,
  value,
  defaultValue,
  readOnly,
  disabled,
  textColor,
  errorMessage,
  onChange = () => {},
  startIcon ,
  endIcon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputType , setInputType] = useState(type)
  const togglePassword = () => {
    if(inputType=='password'){
        setInputType('text')
    }
    else if(inputType=='text'){
        setInputType('password')
    }
  }
console.log({inputType})
  return (
    <div>
    <div
      style={{width:width, background:background}}
      className={`${styles.container} } 
      ${styles[category]}
      `}
    >
       {startIcon && <span className={styles.start_icon}>{startIcon}</span>}
    
      <input
        type={inputType}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => onChange(e)}
        className={`${styles.input}  ${styles[size]}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{background:background, color:textColor}}
        {...props}
      />

      {endIcon && <span className={styles.end_icon}>{endIcon}</span>}
     
    </div>
    {/* {errorMessage && <span className={styles.errorStatement}>{errorMessage}</span>} */}
   
    </div>
  );
};

export default TextField;
