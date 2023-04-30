//Empezamos importando los controladores que creamos en posts.controllers...
const postsControllers = require("./posts.controllers")

//Definimos una funcion usando los verbos que requerimos por cada funcion...

const getAllPosts = (req, res) => {
    postsControllers.findAllPosts()//Ejecutamos el controlador
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}
const getPostById = (req, res) => {
    const id = Number(req.params.id);
    postsControllers
        .findPostById(id)
        .then((data) => {
            if(!data) {
                return res.status(404).json({message: 'Invalid ID'})
            }
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const postNewPost = (req, res) => {
    const postObj = req.body
    postsControllers
        .createNewPost(postObj)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const patchPost = (req, res) => {
    const id = req.params.id
    const postObj = req.body;
  
    postsControllers
      .updatePost(id, postObj)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Invalid ID" });
        }
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: "Bad request", err });
      });
  };

  const deletePost = (req, res) => {
    const id = req.params.id;
    postsControllers
      .deletePost(id)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Invalid ID..." });
        }
        res.status(204).json();
      })
      .catch((err) => {
        res.status(400).json({ message: "Bad request", err });
      });
  };
  
module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    patchPost,
    deletePost
}