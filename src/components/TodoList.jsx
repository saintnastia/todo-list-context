import React, {useContext, useState} from "react";

import TodoItem from "./TodoItem";
import MyContext from "../providers/MyContext";

const TodoList = () => {
    const {todos, value, onChange, onKeyDown, deleteTodo, toggleTodo} = useContext(MyContext);

    return (
        <>
            <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />

            {todos.map((todo) => {
                return(
                    <div key={todo.id} className="mt-3 d-flex justify-content-between" style={{margin: "0 auto"}}>
                        <TodoItem id={todo.id} title={todo.title} finish={todo.finish} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                    </div>

                )}
            )}
        </>
    );
};

export default TodoList;

