const { user } = require('../../models')
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const { join } = require('path')


exports.register = async(req, res) => {
    const schema = Joi.object({
        usernameregister : Joi.string().min(3).required(),
        passwordregister : Joi.string().min(5).required(),
        emailregister : Joi.string().email().required()
    })

    const { error } = schema.validate(req.body)

    if (error)
    {
        return res.status(400).send({
            status: 'Bad Request',
            message: error.details[0].message
        })
    }
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.passwordregister, salt)
        const alreadyRegister = await user.findOne({
            where: {
                email: req.body.emailregister
            }
        })
        if (alreadyRegister)
        {
            return res.status(400).send({
                status: 'Bad Request',
                message: 'Email already used'
            })
        }
        const newUser = await user.create({
            username: req.body.usernameregister,
            password: hashedPassword,
            email: req.body.emailregister,
            role: "user"
        })
        res.status(200).send({
            status: 'Success',
            data : {
                email: newUser.email
            }
        })
    } catch (error) {
        res.status(400).send({
            status: 'Failed',
            message: 'Server Error'
        })
    }
}

exports.login = async(req,res) => {
    const schema = Joi.object({
        usernamelogin: Joi.string().min(3).required(),
        passwordlogin: Joi.string().min(5).required()
    })
    const { error } = schema.validate(req.body)
    if (error) 
    {
        return res.status(400).send({
            status: 'Failed',
            message: error.details[0].message
        })
    }
    try {
        const checkUser = await user.findOne({
            where: {
                username: req.body.usernamelogin
            }
        })
        const comparePassword = await bcrypt.compare(req.body.passwordlogin, checkUser.password)
        if(!comparePassword)
        {
            return res.status(400).send({
                status: 'Failed',
                message: 'Invalid Credential'
            })
        }
        const userToken = {
            id: checkUser.id
        }
        const token = jwt.sign(userToken, process.env.TOKEN_KEY)
        res.status(200).send({
            status: 'Success',
            data: {
                username: checkUser.username,
                token
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'Failed',
            message: 'Server Error'
        })
    }
}