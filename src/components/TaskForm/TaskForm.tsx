import type { TaskFormProps } from "../../types";
import type { Task } from "../../types";
import type { TaskStatus } from "../../types";

export function TaskForm({ task, onSubmit }: TaskFormProps) {

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
    }
    return (
        <div key={task.id} className="task-container">
            <form id={task.id}>
                <label>Task title:</label>
                <input id="title-input" type="text" placeholder="Enter title">{task.title}</input>
                <label>Task description</label>
                <input id="description-input" type="text" placeholder="Enter description">{task.description}</input>
                <select id="status-input" className="status-input" defaultValue={task.status}>
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