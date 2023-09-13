import express from 'express'
import {
    getUser,
    getuserById,
    createUser,
    updateUser, deleteUser
} from "../controllers/Users.js"
import { veryfyUser, adminOnly } from '../middleware/Authuser.js'


const router = express.Router()

router.get('/users', veryfyUser, adminOnly, getUser)
router.get('/users/:id', veryfyUser, adminOnly, getuserById)
router.post('/users', veryfyUser, adminOnly, createUser)
router.patch('/users/:id', veryfyUser, adminOnly, updateUser)
router.delete('/users/:id', veryfyUser, adminOnly, deleteUser)

export default router