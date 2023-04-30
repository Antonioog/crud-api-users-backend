const Posts = require('../models/posts.model')

//Creamos las diferentes funciones de las diferentes acciones.

//Funcion para obtener todos los posts...
const findAllPosts = async () => {
    const posts = await Posts.findAll()
    return posts
}

findAllPosts()
    .then(console.log)
    .catch(console.log)

    //Funcion para obtener un post por su ID...
const findPostById = async (id) => {
    const post = await Posts.findOne({
        where: {
            id: id
        }
    })
    return post
}

//Funcion para crear un posts...
const createNewPost = async (postObj) => {
    const newPost = await Posts.create({
        title: postObj.title,
        content: postObj.content,
        category: postObj.category,
        userName: postObj.userName
    })
    return newPost
}

//Function para modificar un Post...
const updatePost = async(id, postObj) => {
    const selectedPost = await Posts.findOne({
        where: {
            id: id
        }
        
    })
    if(!selectedPost) return null

    const modifiedPost = await selectedPost.update(postObj)
    return modifiedPost
}

//Funcion que elimina un posts...

const deletePost = async(id) => {
    const post = await Posts.destroy({
        where: {
            id: id
        }
    })
    return post
}

module.exports = {
    findAllPosts,
    findPostById,
    createNewPost,
    updatePost,
    deletePost
}

