import React from 'react';
import axios from 'axios';

function SeeUsers(){

    const [users, setUsers] = React.useState([]);

    React.useEffect( () => {
        
        const fetchUsers = async () => {

        try{
            const response = await axios.get("/getUsers");
            
            setUsers(response.data);
        }
        catch(error){
            console.error(error);
        }
    }
    
        fetchUsers();
    }, []);

    return(
        <div>
            <h1>Utilizatorii stocati:</h1>
            {users.map((user, index) => { 
                return(
                    <div key={index}>
                        <p>{user.nume}</p>
                        <p>{user.prenume}</p>
                    </div>
                );
            })}
        </div>
    );

}

export default SeeUsers;