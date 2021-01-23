const express = require("express")

module.exports = function (server) {
    // Api Routes
    const router = express.Router();
    server.use("/api", router)

    // todo Routes
    const todoService = require("../../api/todo/todoService")
    // register serve para cadastrar todas as rotas que eu ja passei no 
    //todoservice
    todoService.register(router,"/todos");
}