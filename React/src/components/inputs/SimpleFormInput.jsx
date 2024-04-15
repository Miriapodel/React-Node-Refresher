import React from "react";

function SimpleFormInput({type, id, labelText, name, value, handleOnChange}){
    return (
        <>
        <label for={name}>{labelText}</label>
        <input type={type} name={name} id={id} value={value} onChange={(event) => {handleOnChange(event)}}/>
        </>  
    );
}

export default SimpleFormInput;