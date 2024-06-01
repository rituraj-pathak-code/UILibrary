import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import { getBackgroundColor, getBrightness } from '../../utils/getUserTheme';
import { useContext } from 'react';
import { RadioGroupContext } from '../RadioGroup';

const RadioButton = ({category='default', label, textColor, value,name = "radioGroup",onChange=()=> {},size, ...props}) => {
    const componentRef = useRef(null);
    const [theme, setTheme] = useState('')
    const context = useContext(RadioGroupContext);

    const handleChange = context?.handleChange || '';
    const groupName = context?.groupName || name;
  

    useEffect(() => {
        const component = componentRef.current;
        if (component) {
            const backgroundColor = getBackgroundColor(component.parentElement);
            const brightness = getBrightness(backgroundColor);
            brightness==null ? setTheme('light') : brightness > 127.5 ? setTheme('light') : setTheme('dark');
        }
    }, []);
  return (
    <label className={`${styles.container} ${styles[size]}`} style={{color: textColor? textColor : theme=='dark' ? 'white' : 'black'}} ref={componentRef}>
      {label}
      <input type="radio"  disabled={category=='disabled' } value={value} onChange={handleChange ? ()=>{handleChange(value)}:()=>onChange(value)} name={groupName} {...props}/>
      <span className={`${styles.radiomark} ${styles[category]} ${size=='large' ? styles.radio_large: size=='small' ? styles.radio_small : styles.radio_normal}`} ></span>
    </label>
  )
}

export default RadioButton