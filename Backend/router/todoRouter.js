const express=require('express');
const { getTodo, createTodo, updateTodo, deleteTodo } = require('../controller/todoController');

const todoRute=express.Router();

todoRute.get("/",getTodo);
todoRute.post("/create",createTodo);
todoRute.put("/update/:id",updateTodo);
todoRute.delete("/delete/:id",deleteTodo);

module.exports=todoRute;