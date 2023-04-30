const router = require('express').Router()


const userServices = require('./users.services')

router.route('/users')
    .get(userServices.getAllUsers)
    .post(userServices.postNewUser)

router.route('/users/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)

module.exports = router


