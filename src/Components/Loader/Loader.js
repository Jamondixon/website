import React from 'react'
import Logo from "../../Images/JDct.png"

export default function Preload(props) {

    const checkClass = () => {
        if(props.loadState){
            return 'loader'
        } else {
            return 'loader loader-animation loader-hidden'
        }
    }

    return (
        <div className={checkClass()}>
            <img src={Logo} alt="jamon logo" />
        </div>
    )
}