import React, { useEffect, useRef, useState } from "react";
import styles from './index.module.css'
import { getBackgroundColor, getBrightness } from "../../utils/getUserTheme";

const Checkbox = ({category='default', label, textColor,value, name, onChange,color,size, ...props}) => {

    const componentRef = useRef(null);
    const [theme, setTheme] = useState('')

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
      <input type="checkbox" disabled={category=='disabled' } value={value} name={name} onChange={onChange} {...props}  />
      <span className={`${styles.checkmark} ${styles[category]}  ${size=='large' ? styles.check_large: size=='small' ? styles.check_small : styles.check_normal}`} ></span>
    </label>
  );
};

export default Checkbox;
