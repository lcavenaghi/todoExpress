const TodoService = require("../services/todoService");
const todoService = require("../services/todoService");

exports.getAll = async (req, res) => {
    try {
        const todos = await TodoService.getAllTodos();
        if (!todos) {
            res.json({});
        } else {
            res.json(todos)
        }
    } catch (error) {
        return res.status(500).json({
            error: 'error while fetching the todos'
        })
    }
}

exports.get = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TodoService.getTodo(id);
        if (!todo) {
            res.json({});
        } else {
            res.json(todo)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: `error while fetching the selected todo`
        })
    }
}

exports.add = async (req, res) => {
    try {
        const createdTodo = await TodoService.addTodo(req.body);
        res.status(201).json(createdTodo);
    } catch (error) {
        return res.status(500).json({
            error: 'error while creating a new todo'
        })
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TodoService.updateTodo(id, req.body);
        if (!todo) {
            res.json({});
        } else {
            res.json(todo)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: `error while fetching the selected todo`
        })
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TodoService.deleteTodo(id);
        if (todo) {
            res.json({});
        } else {
            return res.status(200).json({
                error: `could not find the todo to be deleted`
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: `error while selecting the selected todo`
        })
    }
}