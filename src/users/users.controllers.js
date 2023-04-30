
const Users = require('../models/users.model')


//Creamos las diferentes funciones correspondientes a las diferentes acciones...

//Funcion para obtener todos los usuarios...
const findAllUsers = async () => {
    const users = await Users.findAll()
    return users
}

//Funcion para obtener un usuario por su ID...
const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}

//Funcion de crear un nuevo usuario...
const createUser = async  (userObj) => {
    const newUser = await Users.create({
            firstName: userObj.firstName,
            lastName: userObj.lastName,
            email: userObj.email,
            password: userObj.password
    })
    
    return newUser
}

//Funcion para modificar un usuario...
const updateUser = async(id, userObj) => {
    const selectedUser = await Users.findOne({
        where:{
            id: id
        }
    })

    if(!selectedUser) return null

    const modifiedUser = await selectedUser.update(userObj)
    return modifiedUser
}

//Funcion que elimina un usuario...
const deleteUser = async(id) => {
    const user = await Users.destroy({
        where: {
            id: id
        }
    })
    return user
}


module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}


