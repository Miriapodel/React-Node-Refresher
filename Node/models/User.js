import Sequalize from 'sequelize';
import sequelize from '../util/database/database.js';

const User = sequelize.define("user", {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nume: {
        type: Sequalize.STRING,
        allowNull: false
    },
    prenume: {
        type: Sequalize.STRING,
        allowNull: false
    }
});


export default User;

// import fs from 'fs';
// import * as paths from "../util/paths/paths.js";
// import { get } from 'https';

// // const users = [{nume: "Popescu", prenume: "Ion"}, {nume: "Ionescu", prenume: "Maria"}];

// class User{
//     constructor(nume, prenume){
//         this.nume = nume;
//         this.prenume = prenume;
//     }

//     get getNume(){
//         return this.nume;
//     }

//     get getPrenume(){
//         return this.prenume;
//     }
    
//     set setNume(nume){
//         this.nume = nume;
//     }

//     set setPrenume(prenume){
//         this.prenume = prenume;
//     }
    
//     #verificaUser(){
//         if(this.nume === "" || this.prenume === ""){
//             return false;
//         }

//         return true;
//     }

//     adaugaUser(){

//         if(this.#verificaUser()){


//             const users = User.getUsers((err, users) => {
//                 if(err){
//                     console.log(err);
//                     return ;
//                 }

//             console.log(users);
//             users.push(this);

//             fs.writeFile(paths.usersPath, JSON.stringify(users), (err) => {
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//             });

//             console.log("Utilizatorul a fost adaugat cu succes!");
            
//             });

            
//         }else{
//             console.log("Utilizatorul nu a putut fi adaugat! Are campuri necompletate!")
//         }
//     }

//     static getUsers(callback){
//          fs.readFile(paths.usersPath, (err, data) => {
            
//             if(err){
//                 console.log(err);
//                 callback(err, []);
//                 return;
//             }

//             if(data.length === 0){
//                 callback(null, []);
//                 return;
//             }

//             const users = JSON.parse(data);

//             callback(null, users);
//         });
//     }
// }

// export default User;