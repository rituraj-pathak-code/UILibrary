import React from 'react'
import style from "./index.module.css"

const Label = ({
    type = "primary",
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
        <div
            className={`${style.defaultBtnDiv} ${style[type]} ${style[borderRadius]} ${style[`${size}Size`]}`}
            style={customDesign}>
            {isImageUrl(startIcon) &&
                <div className={style.imageContainer}><img src={startIcon} alt="startIcon" className={`${style[`${size}Img`]}`} /></div>}
            <button type="button"
                className={style.defaultBtnDes}>
                {children}
            </button>
            {isImageUrl(endIcon) &&
                <div className={style.imageContainer}><img src={endIcon} alt="endIcon" className={`${style[`${size}Img`]}`}/></div>}
        </div>
    )
}

export default Label