import React from 'react'
import close from '/assets/close.png'
import styles from './index.module.css'

const Chip = ({label,onClick,onDelete,type,className,...props}) => {
  return (
    <div className={`${styles.container} ${styles[type]} ${onDelete? styles.container_long : styles.container_short} ${className}`} onClick={onClick} {...props}>
        <span>{label}</span>
        {onDelete &&
            <button className={`${styles.closeBtn} ${styles[`closeBtn_${type}`]}`} onClick={onDelete}><img src={close} className={`${styles[`closeBtn_icon_${type}`]}`} alt="" /></button>
        }
    </div>
  )
}

export default Chip