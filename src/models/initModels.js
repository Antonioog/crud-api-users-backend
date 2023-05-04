const Posts = require('./posts.model')
const Users = require('./users.model')

const initModels = () => {
    //Aqui van todas las relaciones de mis models...

    //*a.hasOne(b)
    //*a.hasMany(b)
    //*b.blongsTo(a)
    //*b.blongsToMany(a)

    //?1:1 User - HouseDirection(FK)
    //? User.hasOne(HouseDirection)
    //? HouseDirection.belongsTo(User)


    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? M:M Posts - Categories
    //*Posts.belongsToMany(Categories)
    //*Categories.belongsToMany(Posts)

    //? M:M Posts - Categories
    //*Posts.belongsToMany(Categories), {through: TablaPivote}
    //*Categories.belongsToMany(Posts), {through: TablaPivote}
}

module.exports = initModels