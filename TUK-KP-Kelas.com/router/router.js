import express from "express";
import {
    getUsers, 
    getUserById,
    createproduk,
    updateproduk,
    deleteproduk
} from "../controller/controller.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createproduk);
router.patch('/users/:id', updateproduk);
router.delete('/users/:id', deleteproduk);

export default router;