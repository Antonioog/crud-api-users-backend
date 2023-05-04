const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.model')

const Posts = db.define('posts', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            len:[1, 255]
        }
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[1, 255]
        }
    },

    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1, 255]
        },
        references: {
            key: 'id',
            model: Users
        }
    },
})

module.exports = Posts
