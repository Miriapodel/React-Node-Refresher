import express from 'express';
import * as marcel from '../controllers/marcel.js';

const router = express.Router();

router.get("/helloMarcel", marcel.sayHiToMarcel);
router.get("/vorbesteMarcel", marcel.vorbesteMarcel);

export default router;