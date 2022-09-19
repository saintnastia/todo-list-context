import React, {useState} from "react";

import TodoItem from "./TodoItem";

const InputForm = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13 && value) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: value,
                    finish: false,
                },
            ]);
            setValue('');
        }
    };
    const toggleTodo = (id) => (e) => {
        setTodos(todos.map((item) => ({
            ...item,
            finish: item.id === id ? !item.finish : item.finish,
        })));
    }

    const deleteTodo =(id) => (e) => {
        e.preventDefault();
        setTodos(todos.filter(item => !(item.id === id && item.finish === true )))

    }

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

export default InputForm;

