import express from 'express'
import {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js"
import { veryfyUser } from '../middleware/Authuser.js'


const router = express.Router()

router.get('/product', veryfyUser, getProducts)
router.get('/product/:id', veryfyUser, getProductsById)
router.post('/product', veryfyUser, createProduct)
router.patch('/product/:id', veryfyUser, updateProduct)
router.delete('/product/:id', veryfyUser, deleteProduct)

export default router