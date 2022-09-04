const { user, book } = require('../../models')

exports.getAllUser = async(req, res) => {
    try {
        const checkAdmin = await user.findOne({
            where: {
                id: req.user.id
            }
        })
        if(checkAdmin.role != 'admin')
        {
            return res.status(403).send({
                status: 'Forbidden',
                message: 'You have no right for this access'
            })
        }
        const allUser = await user.findAll({
            raw: true,
        })
        res.status(200).send({
            status: 'Success',
            data: allUser
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: 'Failed',
            message: 'Server Error'
        })
    }
}