import React, { useState } from "react";

const List = ({todo, setTodo, setEdit}) => {
    const handleComplete = (todos) => {
        setTodo(
            todo.map((item) => {
                if(item.id === todos.id) {
                    return { ...item, status: !item.status}
                }
                return item
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todo.find((item) => item.id === id)
        setEdit(findTodo)
    }

    const handleDelete = ({id}) => {
        setTodo(todo.filter((todo) => todo.id !== id))
    }

    return(
        <div>
            {todo.map((item) => (
                <div className={`${item.status == true ? 'bg-success' : 'bg-secondary'} rounded mx-auto my-3 w-75 d-flex justify-content-between`} key={item.id}>
                    <div className="align-center">
                        <p className="pt-3 ml-3 text-left">{item.title}</p>
                    </div>
                    <div>
                        <button className="btn btn-light mt-2 mx-2 pt-2" onClick={() => handleComplete(item)}>
                            <i className="fa fa-check-circle-o"></i>
                        </button>
                        <button className="btn btn-light mt-2 mx-2 pt-2" onClick={() => handleEdit(item)}>
                            <i className="fa fa-pencil-square-o"></i>
                        </button>
                        <button className="btn btn-light mt-2 mx-2 pt-2" onClick={() => handleDelete(item)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List