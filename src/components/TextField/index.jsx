import React, { useState } from "react";
import styles from "./index.module.css";

import passwordIcon from '/assets/eye.png'
import passwordIconCrossed from '/assets/eye_crossed.png'


const TextField = ({
  type = "text",
  placeholder = "",
  rounded,
  name = "",
  color = "",
  startIcon,
  endIcon,
  width,
  background,
  value,
  defaultValue,
  readOnly,
  disabled,
  textColor,
  errorMessage,
  onChange = () => {},
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
      className={`${styles.container} 
      ${startIcon && (endIcon || type=='password') && styles.container_both
      } ${startIcon && styles.container_start} ${
        (endIcon || type=='password') && styles.container_end
      } ${styles[color]} ${disabled && styles.container_disabled} ${
        isFocused ? styles.focused : ""
      } ${rounded == "normal" && styles.container_normal} ${
        rounded == "full" && styles.container_full
      }`}
    >
      {startIcon  && (
        <img src={startIcon} alt="" className={styles.icon} />
      )}
      <input
        type={inputType}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => onChange(e)}
        className={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{background:background, color:textColor}}
        {...props}
      />
      {endIcon && type!=='password' && (
        <img src={endIcon} alt="" className={styles.icon} />
      )}
      {inputType == "password" && type=='password' && (
        <img src={passwordIcon} style={{cursor:'pointer'}} alt="" className={styles.icon} onClick={togglePassword} />
      )}
      {inputType == "text" && type=='password' && (
        <img src={passwordIconCrossed} style={{cursor:'pointer'}} alt="" className={styles.icon} onClick={togglePassword} />
      )}
    </div>
    {errorMessage && <span className={styles.errorStatement}>{errorMessage}</span>}
   
    </div>
  );
};

export default TextField;
