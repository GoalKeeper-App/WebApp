import TodoIcon from './TodoIcon';

export default function Todo(props){
    const todo = props.todo;

    return (
        <li onClick={() => props.onClick(todo.name, props.list)}
          className={
            "todo " +
            (todo.completed ? "completed " : "not_completed ") +
            (todo.completed_by.length
              ? "has_completed_by"
              : "doesnt_have_completed_by")
          }
        >
          <TodoIcon completed={todo.completed} />
          <p className="todo_title">{todo.name}</p>
          {todo.completed_by.length ? (
            <p className="todo_completed_by">{todo.completed_by.join(", ")}</p>
          ) : null}
          <p className="todo_streak">
            {todo.streak > 0
              ? todo.streak + "🔥"
              : todo.streak < 0
              ? todo.streak * -1 + "💩"
              : ""}
          </p>
        </li>
    );
}