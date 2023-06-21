"use client";
type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
};

function TodoItem({ id, title, completed, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={completed}
        onChange={(e) => {
          toggleTodo(id, e.target.checked);
        }}
      ></input>
      <label htmlFor={id} className="peer-checked:line-through">
        {title}
      </label>
    </li>
  );
}

export default TodoItem;
