import React, {useState, useEffect} from 'react';

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [complete, setComplete] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:3000/todos').then(res => res.json()).then(data => {
        //     setTodos(data.filter(todo => !todo.complete));
        //     setComplete(data.filter(todo => todo.complete));
        // });

        setTodos([
            {
                name: 'todo1',
                complete: false
            },
            {
                name: 'todo2',
                complete: false
            },
            {
                name: 'todo3',
                complete: false
            }
        ])
    
        setComplete([
            {
                name: 'todo4',
                complete: true
            },
            {
                name: 'todo5',
                complete: true
            }
        ])
    }, []);

    return (
        <main>
            <ul className="todo_list">
                {todos.map((todo, i) => 
                    (<li key={i}>{todo.name}</li>)
                )}
            </ul>
            <ul className="completed_list">
                {complete.map((todo, i) => 
                    (<li key={i}>{todo.name}</li>)
                )}
            </ul>
        </main>
    )
}

export default TodoApp;