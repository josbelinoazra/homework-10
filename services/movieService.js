const movieRepositorie = require('../repositories/movieRepositorie.js')

class movieService {

    static create = async (params) => {
        try {

            const {title, author, release_year, description, user_id} = params
            const payload = {
                title,
                author,
                release_year,
                description,
                user_id
            }

            const data = await movieRepositorie.create(payload)
            return data
            
        } catch (err) {
            throw err
        }
    }

    static findAll = async () => {
        try {

            const data = await movieRepositorie.findAll()
            return data
            
        } catch (err) {
            throw err
        }
    }

    static findOne = async (params) => {
        try {

            const {id} = params

            const data = await movieRepositorie.findOne(id)
            return data
            
        } catch (err) {
            throw err
        }
    }

    static update = async (id, updateMovie) => {
        try {
            const {title, author, release_year, description} = updateMovie

            const payload = {
                title,
                author,
                release_year,
                description
            }

            const data = await movieRepositorie.update(id, payload)
            return data
            
        } catch (err) {
            throw err
        }
    }

    static delete = async (params) => {
        try {

            const {id} = params

            await movieRepositorie.delete(id)
            
        } catch (err) {
            throw err
        }
    }

    static uploadImage = async (params) => {
        try {

            const {file, id} = params

            const image_url = `http://localhost:3000/uploads/${file.filename}`
            const payload = {
                image_url
            }

            const data = await movieRepositorie.uploadImage(id, payload)
            return data
        } catch (err) {
            throw err
        }
    }

}

module.exports = movieService;