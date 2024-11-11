

import express from "express"
import { AddBook, deleteBook, filterBook, getAllBook, getSingleBook, updatedBook } from "../controller/BookController.js"



const router = express.Router()





router.post("/addbook", AddBook)

router.get("/allbook", getAllBook)
router.get("/getSingleBook/:id", getSingleBook)
router.put("/updatedBook/:id", updatedBook)
router.delete("/deleteBook/:id", deleteBook)

router.get("/filterbook" , filterBook)









export default router




