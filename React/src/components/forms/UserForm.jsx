import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserForm(){
    const [nameValue, setNameValue] = React.useState('');
    const [surnameValue, setSurnameValue] = React.useState('');
    const navigate = useNavigate();

    function handleOnChange(event){
        if(event.target.name === 'name'){
            setNameValue(event.target.value);
        }
        if(event.target.name === 'surname'){
            setSurnameValue(event.target.value);
        }
    }

    async function handleSubmit(event){
        event.preventDefault();
 
        const userData = {
            name: nameValue,
            surname: surnameValue
        }

        try{
            const response = await axios.post("/addUser", userData);
            
            setNameValue('');
            setSurnameValue('');

            navigate("/");
        }
        catch(error){
            window.console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Introdu datele despre utilizator!</h1>
            <label for="name">Nume:</label>
            <input type='text' name='name' id='name' value={nameValue} onChange={(event) => {handleOnChange(event)}}/>
            <br />

            <label for="surname">Prenume:</label>
            <input type='text' name='surname' id='surname' value={surnameValue} onChange={(event) => {handleOnChange(event)}}/>
            <br />

            <button type='submit'>Trimite</button>
        </form>
    );
}

export default UserForm;