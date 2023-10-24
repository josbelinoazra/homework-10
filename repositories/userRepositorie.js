const {User} = require('../models')

class userRepositorie {

    static create = async (params) => {

        try {
            const data = await User.create(params, {
                returning: true
            })
            return data
        } catch (err) {
            throw err
        }
    }

    static findAll = async () => {
        try {

            const data = await User.findAll()
            return data
            
        } catch (err) {
            throw err
        }
    }

    static findOne = async (id) => {
        try {

            const data = await User.findOne({
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

    static update = async (id, payload) => {
        try {

            const foundUser = await User.findOne({
                where : {
                    id
                }
            })


            if (!foundUser) {
                throw {name : "ErrorNotFound"}
            }

            const data = await foundUser.update({
                username : payload.username || foundUser.username,
                email : payload.email || foundUser.username
            },{ returning : true })

            return data
            
        } catch (err) {
            throw err
        }
    }

    static delete = async (id) => {
        try {

            const foundUser = await User.findOne({
                where : {
                    id
                }
            })

            if (!foundUser) {
                throw {name : "ErrorNotFound"}
            }

            await foundUser.destroy()
            
        } catch (err) {
            throw err
        }
    }

}

module.exports = userRepositorie;