const userRepositorie = require('../repositories/userRepositorie.js')

class userService {

    static create = async (params) => {

        try {

            const {username, email} = params
            const payload = {
                username,
                email
            }
            const data = await userRepositorie.create(payload)
            return data;
            
        } catch (err) {
            throw err
        }
    }

    static findAll = async () => {
        try {

            const data = await userRepositorie.findAll()
            return data
            
        } catch (err) {
            throw err
        }    
    }

    static findOne = async (params) => {
        try {

            const {id} = params

            const data = await userRepositorie.findOne(id)
            return data
            
        } catch (err) {
            throw err
        }
    }

    static update = async (id, updatedUser) => {
        try {
            const {username, email} = updatedUser
            const payload = {
                username,
                email
            }

            const data = await userRepositorie.update(id, payload)
            return data;
            
        } catch (err) {
            throw err
        }
    }

    static delete = async (params) => {
        try {

            const {id} = params

            await userRepositorie.delete(id)
            
        } catch (err) {
            throw err
        }
    }
}

module.exports = userService;