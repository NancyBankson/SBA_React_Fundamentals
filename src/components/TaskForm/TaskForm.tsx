import { useState } from "react";
// import type { TaskStatus } from "../../types";
import type { FormData, TaskFormProps } from "../../types";
import type { Task } from "../../types";
import { RetrieveSavedTasks } from "../../utils/taskUtils";
import { RetrieveId } from "../../utils/taskUtils";

export function TaskForm({ onSubmit }: TaskFormProps) {
    const [tasks, setTasks] = useState<Task[]>(RetrieveSavedTasks);
    const [id, setId] = useState(RetrieveId);
    const [formData, setFormData] = useState<FormData>({
        id: id.toString(),
        title: '',
        description: '',
        status: 'Pending',
        priority: 'Low',
        dueDate: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target; // Destructure name and value

        setFormData(prevFormData => ({
            ...prevFormData, // Spread existing state
            [name]: value     // Update changed field using computed property name
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let newTasks = [...tasks];
        // console.log(newTasks);
        let newId = [...formData.id];
        newTasks.push(formData);
        // Moved logic to App.tsx to fix problem: after deleting an item, item would reappear in local storage when new item was added via form
        // localStorage.setItem("taskArray", JSON.stringify(newTasks));
        setTasks(newTasks);
        localStorage.setItem("savedId", JSON.stringify(newId));
        setId(id + 1);
        setFormData({
            id: (id + 1).toString(),
            title: '',
            description: '',
            status: 'Pending',
            priority: 'Low',
            dueDate: ''
        })
        onSubmit(formData);
    };

    return (
        <div className="task-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Task title:</label>
                <input id="title-input" type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter title"></input>
                <label htmlFor="description">Task description:</label>
                <input id="description-input" type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter description"></input>
                <label htmlFor="status">Status:</label>
                <select id="status-input" name="status" value={formData.status} onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <label htmlFor="priority">Priority:</label>
                <select id="priority-input" name="priority" value={formData.priority} onChange={handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <label htmlFor="dueDate">Due Date:</label>
                <input id="date-input" type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} placeholder="MM/DD/YYYY" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}