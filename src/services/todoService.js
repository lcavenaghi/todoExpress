const Todo = require('../models/Todo');

module.exports = class TodoService {
    static async getTodo(id) {
        let todo;
        try {
            todo = await Todo.find({
                _id: id
            });
            return todo;
        } catch (error) {
            console.log(`Could not fetch the todo ${todo} - ${error}`);
        }
    }

    static async deleteTodo(id) {
        let returnedStatus;
        try {
            returnedStatus = await Todo.deleteOne({
                _id: id
            });
            return returnedStatus;
        } catch (error) {
            console.log(`Could not fetch the todo ${todo} - ${error}`);
            return false;
        }
    }

    static async getAllTodos() {
        let allTodos;
        try {
            allTodos = await Todo.find();
            return allTodos;
        } catch (error) {
            console.log(`Could not fetch todos collection - ${error}`);
        }
    }

    static async updateTodo(id, todo) {
        let updateResponse;
        try {
            updateResponse = await Todo.updateOne({
                _id: id
            }, {
                ...todo,
                date: new Date()
            });

            return updateResponse;
        } catch (error) {
            console.log(`Could not update Todo ${error}`);
        }
    }

    static async addTodo(todoData) {
        try {
            const newTodo = {
                title: todoData.title,
                description: todoData.description,
                date: todoData.date,
                finished: todoData.finished,
            }
            const response = await new Todo(newTodo).save();
            return response;
        } catch (error) {
            console.log(`Could not create a new todo - ${error}`);
        }
    }
}