const movieService = require('../services/movieService.js')

class movieController {

    static create = async (req, res, next) => {
        try {

            const data = await movieService.create(req.body)
            res.status(201).json(data)

        } catch (err) {
            next(err)
        }
    }

    static findAll = async (req, res, next) => {
        try {

            const data = await movieService.findAll()
            res.status(200).json(data)
            
        } catch (err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {

            const data = await movieService.findOne(req.params)
            res.status(200).json(data)
            
        } catch (err) {
            next(err)
        }
    }

    static update = async (req, res, next) => {
        try {

            const {id} = req.params
            const updateMovie = req.body

            const data = await movieService.update(id, updateMovie)
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static delete = async (req, res, next) => {
        try {

            const data = await movieService.delete(req.params)

            res.status(200).json({message : "Deleted Movie Successfully"})
            
        } catch (err) {
            next(err)
        }
    }

    static uploadImage = async (req, res, next) => {
        try {
            
            const params = {
                file : req.file,
                id : req.params.id
            }

            const data = await movieService.uploadImage(params)

            res.status(200).json(data)
            
        } catch (err) {
            next(err)
        }
    }

}

module.exports = movieController