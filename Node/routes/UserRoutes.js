import express from 'express';
import * as UsersController from '../controllers/UsersController.js';

const router = express.Router();

router.get("/arataUseri", UsersController.afiseazaUseri);

router.get("/getUsers", UsersController.getUsers);

router.post("/addUser", UsersController.addUser);

export default router;