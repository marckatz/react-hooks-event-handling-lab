// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function blurHandler(){
        console.log("Hey! Eyes on me!")
    }
    function focusHandler(){
        console.log("Good!")
    }
    return (
        <div>
            <button onBlur={blurHandler} onFocus={focusHandler}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe