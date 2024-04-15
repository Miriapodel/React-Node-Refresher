import React from "react"

function HiddenInput({ id, value}){
    return(
        <input type="hidden" id={id} value={value} />
    )
}

export default HiddenInput;