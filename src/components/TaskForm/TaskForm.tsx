import { useState } from "react";
// import type { Task } from "../../types";
// import type { TaskStatus } from "../../types";
import type { TaskFormProps } from "../../types";
import type { FormData } from "../../types";

export function TaskForm({ onSubmit }: TaskFormProps) {


    const SingleStateForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        id: "5",
        title: '',
        description: '',
        status: 'All',
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
        onSubmit(formData);
        // API call logic...
    };


    return (
        <div className="task-container">
            <form onSubmit={handleSubmit}>
                <label>Task title:</label>
                <input id="title-input" type="text" name="title" value={FormData.title} onChange={handleChange} placeholder="Enter title"></input>
                <label>Task description</label>
                <input id="description-input" type="text" name="description" value={FormData.description} onChange={handleChange} placeholder="Enter description"></input>
                <select id="status-input" name="status" value={FormData.status} onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <label>Due Date:</label>
                <input id="date-input" type="date" name="dueDate" value={FormData.dueDate} onChange={handleChange} placeholder="MM/DD/YYYY" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

    }}