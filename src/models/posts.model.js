const {DataTypes} = require('sequelize')

const db = require('../utils/database')

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

    userName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 255]
        }
    },
})

module.exports = Posts
