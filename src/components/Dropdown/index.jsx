import React, { useState } from 'react'
import styles from './index.module.css'
import downArrow from '/assets/arrow_down.png'
import upArrow from '/assets/arrow_up.png'




const Dropdown = ({title,dropdownValues,setSelectedValue}) => {
  const [isOpen , setisOpen] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState("")
  const dropDownOpenHandler = () => {
    setisOpen(!isOpen)
  }
  const selectedItemHandler = (value,index) => {
    setSelectedValue(value);
    setSelectedTitle(dropdownValues[index]?.name)
    setisOpen(false)
  }
  return (
    <div className={styles.container}>
      <div className={styles.dropdownHead} onClick={dropDownOpenHandler}>
        {selectedTitle? selectedTitle : title}
        <img src={isOpen?upArrow : downArrow} alt="" />
      </div>
      <div className={`${styles.dropdownBody} ${isOpen ? styles.open : styles.closed}`}>
        {dropdownValues?.map((item,index)=> (
          <div className={styles.dropdownItem} key={index} onClick={()=>selectedItemHandler(item?.value,index)}>{item?.name}</div>
        ))}

      </div>
    </div>
  )
}

export default Dropdown