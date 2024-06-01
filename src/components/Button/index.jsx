import React from 'react'
import style from "./index.module.css"

const Button = ({
    category = "primary",
    type='button',
    onClick = () => { },
    startIcon = "",
    endIcon = "",
    borderRadius = "normal",
    customDesign = {},
    children,
    size="normal"
}) => {
    const isImageUrl = (input) => {
        const imagePattern = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;
        if (typeof input === 'string' && imagePattern.test(input)) {
            return true;
        }
        return false;
    }
  
    return (
        <button
            type={type}
            className={`${style.defaultBtnDiv}  ${style[category]} ${style[borderRadius]} ${style[`${size}Size`]}`}
            style={customDesign}
            onClick={() => category !== "disabled" && onClick()}>
            {isImageUrl(startIcon) &&
                <div className={style.imageContainer}><img src={startIcon} alt="startIcon" className={`${style[`${size}Img`]}`} /></div>}
            <span 
                className={style.defaultBtnDes}>
                {children}
            </span>
            {isImageUrl(endIcon) &&
                <div className={style.imageContainer}><img src={endIcon} alt="endIcon" className={`${style[`${size}Img`]}`}/></div>}
        </button>
    )
}

export default Button