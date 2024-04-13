import User from "../models/User.js";

export const afiseazaUseri =  (req, res) => {
    const users = User.getUsers();

    res.render("afisareUsers.ejs", {users: users});
}

export const addUser = (req, res) => {
    const {name, surname} = req.body;
    const user = new User(name, surname);

    user.adaugaUser();

    res.status(200).send("Utilizatorul a fost adaugat cu succes!");
}

export const getUsers = (req, res) => {
    console.log("Se trimit userii!");
    
    const users = User.getUsers((err, users) => {
        if(err){
            console.log(err);
            res.status(500).json([]);
        }
        else
            res.status(200).json(users);
    });
    
    // console.log(users);
    
}