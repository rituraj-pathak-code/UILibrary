import React, { useState } from 'react'
import styles from './index.module.css'
import arrowUp from '/assets/arrow_up.png'
import arrowDown from '/assets/arrow_down.png'




const Accordion = ({accordionData,expandOneAtTime=false, props}) => {
    const [isOpen, setIsOpen] = useState(accordionData?.map(() => false));

    const accordionHandler = (index) => {
        if(expandOneAtTime == true){
            setIsOpen((prevState) => {
                return prevState.map((isOpen, i) => i === index ? !isOpen : false);
            });
        }
        else {
        setIsOpen((prevState) => {
            const newIsOpen = [...prevState];
            newIsOpen[index] = !newIsOpen[index];
            return newIsOpen;
        });
    }
    };
  return (
    <div className={styles.super_container}>
    {accordionData?.map((item,index)=> (
         <div className={styles.container} key={index} {...props}>
         <div className={styles.heading} onClick={()=>accordionHandler(index)}>
             {item.heading}
             <img src={isOpen[index]? arrowUp : arrowDown} alt="" />
         </div>
         {isOpen[index] &&
             <div className={`${styles.content}`}>{item.description}</div>
         }
     </div>
    ))}
   
    </div>
  )
}

export default Accordion