const { user, book } = require('../../models')

exports.addBook = async(req, res) => {
    try {
        const checkAdmin = await user.findOne({
            where: {
                id: req.user.id
            }
        })
        if (checkAdmin.role != 'admin')
        {
            return res.status(403).send({
                Status: 'Forbidded',
                message: 'You have no right to this access'
            })
        }
        const addBook = await book.create({
            booktitle: req.body.booktitle,
            bookauthor: req.body.bookauthor,
            pages: req.body.pages,
            about: req.body.about
        })
        res.status(201).send({
            Status: 'Success',
            Data: addBook
        })
    } catch (error) {
        res.status(400).send({
            Status: 'Failed',
            Message: 'Server Error'
        })
    }
}

exports.allBook = async(req, res) => {
    try {
        const allBook = await book.findAll()
        res.status(200).send({
            Status: 'Success',
            message: allBook
        })
    } catch (error) {
        res.status(400).send({
            Status: 'Failed',
            Message: 'Server Error'
        })
    }
}

exports.singleBook = async(req, res) => {
    try {
        const singleBook = await book.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send({
            Status: 'Success',
            message: singleBook
        })
    } catch (error) {
        res.status(400).send({
            Status: 'Failed',
            Message: 'Server Error'
        })
    }
}

exports.deleteBook = async(req, res) => {
    try {
        let id = req.params.id
        const checkAdmin = await user.findOne({
            where: {
                id: req.user.id
            }
        })
        if (checkAdmin.role != 'admin')
        {
            return res.status(403).send({
                Status: 'Forbidded',
                message: 'You have no right to this access'
            })
        }
        await book.destroy({
            where: {
                id
            }
        })
        res.status(200).send({
            Status: 'Success',
            message: `Book with id ${id} already deleted`
        })
    } catch (error) {
        res.status(400).send({
            Status: 'Failed',
            Message: 'Server Error'
        })
    }
}

exports.updateBook = async(req, res) => {
    try {
        const checkAdmin = await user.findOne({
            where: {
                id: req.user.id
            }
        })
        if (checkAdmin.role != 'admin')
        {
            return res.status(403).send({
                Status: 'Forbidded',
                message: 'You have no right to this access'
            })
        }
        await book.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send({
            Status: 'Success',
            message: `Book with id ${req.params.id} updated`,
            data: req.body
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            Status: 'Failed',
            Message: 'Server Error'
        })
    }
}