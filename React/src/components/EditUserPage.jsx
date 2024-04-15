import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SimpleFormInput from './inputs/SimpleFormInput';

function EditUserPage(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [nameValue, setNameValue] = React.useState('');
    const [surnameValue, setSurnameValue] = React.useState('');

    React.useEffect(() => {

        const fetchUser = async () => {
            try{
                const response = await axios.get("/getUser/" + id);
                const user = response.data;

                setNameValue(user.nume);
                setSurnameValue(user.prenume);
            }
            catch (error){
                console.log("Datele utilizatorului nu au putut fi preluate!");
                console.log(error);

                navigate("/");
            }
        }

        fetchUser();
    }, []);

    function handleOnChange(event){
        if(event.target.name === 'name'){
            setNameValue(event.target.value);
        }
        if(event.target.name === 'surname'){
            setSurnameValue(event.target.value);
        }
    }

    function handleOnSubmit(event){
        event.preventDefault();

        const addUser = async () => {
            try{
                const response = await axios.post("/editUser", {id: id, name: nameValue, surname: surnameValue});

                navigate("/showUsers");
            }
            catch(error){
                console.log("Eroare la adaugarea user-ului in db!");
                console.log(error);

                navigate("/showUsers");
            }
        }

        addUser();
    }

    return (
        <div>
            <h1>Editeaza utilizatorul</h1>
            <form onSubmit={event => handleOnSubmit(event)}>
                <SimpleFormInput type={"text"} id={"name"} labelText={"Nume: "} name={"name"} value={nameValue} handleOnChange={event => handleOnChange(event)} />
                <br />

                <SimpleFormInput type={"text"} id={"surname"} labelText={"Prenume: "} name={"surname"} value={surnameValue} handleOnChange={event => handleOnChange(event)} />
                <br />

                <button onClick={handleOnSubmit}>Editeaza!</button>
            </form>
        </div>
    );
}

export default EditUserPage;