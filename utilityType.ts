// ex1
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const originalTodo: Todo = {
    title: "Delete inactive users",
    description: "..."
};

const updatedTodo = updateTodo(originalTodo, { title: "Update user permissions" });
console.log(updatedTodo);

// ex2
interface User {
    username: string;
    email: string;
}

const user: Readonly<User> = {
    username: "oualid-a",
    email: "oualidach@gmail.com",
};
