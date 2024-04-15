import express from "express";
import * as paths from "../util/paths/paths.js";

const router = express.Router();

router.get("*", (req, res) => {
    res.sendFile(paths.indexPath);
})

export default router;