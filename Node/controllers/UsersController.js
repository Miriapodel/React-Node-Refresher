import User from "../models/User.js";
import sequelize from "../util/database/database.js";

export const afiseazaUseri =  (req, res) => {
    const users = User.getUsers();

    res.render("afisareUsers.ejs", {users: users});
}

export const addUser = (req, res) => {
    const {name, surname} = req.body;
    const user = new User(name, surname);

    User.create({
        nume: name,
        prenume: surname

    }).then(result => {
        console.log("User adaugat cu succes!");

        res.status(200).redirect("/");
    }).catch(err => {
        console.log(err);
    });
}

export const getUsers = (req, res) => {
    console.log("Se trimit userii!");
    
    User.findAll().then( users => {
        console.log("Userii au fost preluati din baza de date!");

        res.status(200).send(users);
    })
    .catch(err => {
        console.log(err);

        res.status(500).send([]);
    });
}

export const getUser = (req, res) => {
    const id = req.params.id;

    User.findByPk(id).then( user =>{
        console.log("Userul a fost gasit!");

        res.json(user);
    })
    .catch(err => {
        console.log(err);

        res.redirect("/getUsers");
    })
}

export const editUser = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const surname = req.body.surname;

    User.findByPk(id).then(user =>{
        if(!user)
            return res.sendStatus(404);


        user.nume = name;
        user.prenume = surname;

        return user.save();
    })
    .then(result =>{
        console.log("Editare reusita!");

        res.sendStatus(200);
    })
    .catch(error => {
        console.log("Editare nereusita!")

        res.sendStatus(500);
    })
}