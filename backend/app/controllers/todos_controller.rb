class TodosController < ApplicationController

    def index
        todos = Todo.order("created_at ASC")
        render json: todos, status: :ok
    end

    def show
        todo = Todo.find(params[:id])
        render json: todo, status: :ok
    end

    def create
        todo = Todo.new(todo_params)

        if todo.save
            render json: todo, status: :ok
        else
            render json: todo.errors, status: :unprocessable_entity
        end

    end

    def destroy
        todo = Todo.find(params[:id])
        todo.destroy
        render json: todo, status: :ok
    end

    def update
        todo = Todo.find(params[:id])
        if todo.update(todo_params)
          render json: todo,status: :ok
        else
          render json: todo.errors,status: :unprocessable_entity
        end
    end

    private

    def todo_params
        params.permit(:title, :completed)
    end

end
