import classNames from'classnames'


import { forwardRef, useState } from "react";
import image from'~/assets/image'
import styles from './Image.modual.scss'


function Image({src, alt,classname,fallback = image.noImage,...props},ref) {
    const [_fallBack,setFallBack]=useState('')

    const handleErro=()=>{
        setFallBack(fallback)
    }
    return ( 
        <img className={
            classNames(styles.wrapper,classname)
        }ref={ref} src={_fallBack||src} alt={alt} {...props} onError={handleErro}/>
    );
}

export default forwardRef(Image);