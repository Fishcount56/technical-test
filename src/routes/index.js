const express = require('express')
const router = express.Router()
const { login, register } = require('../controller/c_auth')
const { getAllUser } = require('../controller/c_admin')
const { auth} = require('../middleware/m_auth')
const { addBook, allBook, singleBook, deleteBook, updateBook } = require('../controller/c_book')

router.post('/login', login)
router.post('/register', register)

router.get('/users', auth, getAllUser)

router.post('/addBook', auth, addBook)
router.get('/books', allBook)
router.get('/book/id=:id', singleBook)
router.delete('/deleteBook/id=:id', auth, deleteBook)
router.patch('/updateBook/id=:id', auth, updateBook)

module.exports = router