// import { useState } from "react";
import type { Task } from "../../types";
import type { TaskStatus } from "../../types";
import type { TaskFormProps } from "../../types";

export function TaskForm({onSubmit}: TaskFormProps) {
    // const [tasks, setTasks] = useState<Task[]>([]);
    // const [filteredTasks, setFilteredTasks] = useState(tasks);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        let newIdNumber = 5;
        let taskObject: Task = {} as Task;
        taskObject.id = newIdNumber.toString();
        const titleElement = document.getElementById("title-input") as HTMLInputElement; 
        taskObject.title = titleElement.value;       
        const descElement = document.getElementById("description-input") as HTMLInputElement;
        taskObject.description = descElement.value;
        const statusElement = document.getElementById("status-input") as HTMLSelectElement;
        taskObject.status = statusElement.value as TaskStatus;
        const dueDateElement = document.getElementById("date-input") as HTMLInputElement;
        taskObject.dueDate = dueDateElement.value;
        onSubmit(taskObject);
        // const updatedTasks=[...tasks, taskObject];
        // setTasks(updatedTasks);
        // setFilteredTasks(updatedTasks);
    }
    return (
        <div className="task-container">
            <form>
                <label>Task title:</label>
                <input id="title-input" type="text" placeholder="Enter title"></input>
                <label>Task description</label>
                <input id="description-input" type="text" placeholder="Enter description"></input>
                <select id="status-input" className="status-input">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <label>Due Date:</label>
                <input id="date-input" type="date" placeholder="MM/DD/YYYY" />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}