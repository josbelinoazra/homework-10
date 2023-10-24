const {Movie} = require('../models')

class movieRepositorie {

    static create = async (params) => {
        try {

            const data = await Movie.create(params, {
                returining : true
            })

            return data
            
        } catch (err) {
            throw err
        }
    }

    static findAll = async () => {
        try {

            const data = await Movie.findAll()
            return data
            
        } catch (err) {
            throw err
        }
    }

    static findOne = async (id) => {
        try {

            const data = await Movie.findOne({
                where : {
                    id
                }
            })

            if (!data) {
                throw {name : "ErrorNotFound"}
            }

            return data
            
        } catch (err) {
            throw err
        }
    }

    static update = async (id, params) => {
        try {

            const foundMovie = await Movie.findOne({
                where : {
                    id
                }
            })

            if (!foundMovie) {
                throw {name : "ErrorNotFound"}
            }

            const data = await foundMovie.update({
                title : params.title || foundMovie.title,
                author : params.author || foundMovie.author,
                release_year : params.release_year || foundMovie.release_year,
                description : params.description || foundMovie.description
            }, {returning : true})

            return data
            
        } catch (err) {
            throw err
        }
    }

    static delete = async (id) => {
        try {

            const foundMovie = await Movie.findOne({
                where : {
                    id
                }
            })

            if (!foundMovie) {
                throw {name : "ErrorNotFound"}
            }

            await foundMovie.destroy()
            
        } catch (err) {
            throw err
        }
    }

    static uploadImage = async (id, payload) => {
        try {
            const foundMovie = await Movie.findOne({
                where : {
                    id
                }
            })

            if (!foundMovie) {
                throw {name : "ErrorNotFound"}
            }

            await foundMovie.update(payload)
            return foundMovie
        } catch (err) {
            throw err
        }
    }

}

module.exports = movieRepositorie;