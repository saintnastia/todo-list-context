import React, {useState} from "react";
import MyContext from "./MyContext";

const MyProvider = ({children}) => {
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

    return(
        <MyContext.Provider value={{todos, value,  onChange, deleteTodo, toggleTodo, onKeyDown}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;