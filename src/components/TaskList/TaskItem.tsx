import { useState } from "react";
import type { TaskItemProps } from "../../types";
import type { TaskStatus } from "../../types";

export function TaskItem({ task, onTitleChange, onStatusChange, onDescriptionChange, onDelete, onClick }: TaskItemProps) {
    const [isVisible, setIsVisible] = useState(true);

    const handleTitleChange = (itemId: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle: string = event.target.value;
        onTitleChange(itemId, newTitle)
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLElement;
        const newStatus = event.target.value as TaskStatus;
        onStatusChange(target.id, newStatus)
    }

     const handleDescriptionChange = (itemId: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription: string = event.target.value;
        onDescriptionChange(itemId, newDescription)
    }

    const handleDelete = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const target = event.target as HTMLElement;
        onDelete(target.id);
    }

    const handleClick = (itemId: number) => {
        const taskId: number = itemId;
        onClick(taskId);
        setIsVisible(false);
    };

    const handleSave = () => {
        setIsVisible(true);
    }

    return (
        <div key={task.id} className="task-container">
            <div className="title-row">
                {isVisible && (<h1>{task.title}</h1>)}
                {!isVisible && (<input type="text" name="title" placeholder={task.title} onChange={(event) => handleTitleChange(task.id, event)}></input>)}
                <select id={task.id} defaultValue={task.status} onChange={handleStatusChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <p id={task.id} className="delete-text" onClick={handleDelete}>Delete</p>
            </div>
            {isVisible && (<h2>{task.description}</h2>)}
            {!isVisible && (<input type="text" name="description" placeholder={task.description} onChange={(event) => handleDescriptionChange(task.id, event)}></input>)}
            <h3><span>Priority: {task.priority}</span>  Due: {task.dueDate}</h3>
            <button onClick={() => handleClick(parseInt(task.id))}>Edit</button>
            {!isVisible && (<button onClick={handleSave}>Save</button>)}
        </div>
    )
}