const userService = require('../services/userService.js')

class userController {

    static create = async (req, res, next) => {

        try {
            
            const data = await userService.create(req.body)

            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    static findAll = async (req, res, next) => {
        try {

            const data = await userService.findAll()
            res.status(200).json(data)
            
        } catch (err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {

            const data = await userService.findOne(req.params)

            if (!data) {
                throw {name : "ErrorNotFound"}
            }
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static update = async (req, res, next) => {
        try {

            const {id} = req.params
            const updatedUser = req.body

            const data = await userService.update(id, updatedUser)
            res.status(200).json(data)
            
        } catch (err) {
            next(err)
        }
    }

    static delete = async (req, res, next) => {
        try {

            const data = await userService.delete(req.params)

            res.status(200).json({message : "Deleted User Successfully"})
            
        } catch (err) {
            next(err)
        }
    }
}

module.exports = userController;