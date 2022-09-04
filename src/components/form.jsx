import React, { useEffect } from "react";
import {v4 as uuidv4} from 'uuid'

const Form = ({input, setInput, todo, setTodo, edit, setEdit}) => {
    const updateList = (title, id, status) => {
        const newList = todo.map((item) => 
            item.id === id ? {title, id, status} : item
        )
        setTodo(newList)
        setEdit("")
    }

    useEffect(() => {
        if(edit) {
            setInput(edit.title)
        } else {
            setInput("")
        }
    }, [setInput, edit])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!edit){
            setTodo([...todo, {id: uuidv4(), title: input, status: false}])
            setInput("")
        } else {
            updateList(input, edit.id, edit.status)
        }
    }

    return (
        <form className="d-flex text-center my-5 w-75 mx-auto" onSubmit={handleSubmit}>
            <input 
                type="text"  
                placeholder="input todo"  
                className="form-control mx-1" 
                value={input}
                required 
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary mx-1">{edit ? "Update" : "Add"}</button>
        </form>
    )
}

export default Form