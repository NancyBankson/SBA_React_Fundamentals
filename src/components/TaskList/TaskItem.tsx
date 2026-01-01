import { useState } from "react";
import type { TaskItemProps, TaskPriority } from "../../types";
import type { TaskStatus } from "../../types";

export function TaskItem({ task, onTitleChange, onStatusChange, onDescriptionChange, onPriorityChange, onDateUpdate, onDelete, onClick }: TaskItemProps) {
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

    const handlePriorityChange = (itemId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        // const target = event.target as HTMLElement;
        const newPriority = event.target.value as TaskPriority;
        onPriorityChange(itemId, newPriority)
    }

    const handleDateChange = (itemId:string, event: React.ChangeEvent<HTMLInputElement>) => {
        // const target = event.target as HTMLElement;
        const newDate: string = event.target.value;
        onDateUpdate(itemId, newDate)
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
                {!isVisible && (<input className="edit-input" type="text" name="title" placeholder={task.title} onChange={(event) => handleTitleChange(task.id, event)}></input>)}
                <div id="status-delete">
                    <label htmlFor="status">Status:</label>
                    <select id={task.id} defaultValue={task.status} onChange={handleStatusChange}>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <p id={task.id} className="delete-text" onClick={handleDelete}>Delete</p>
                </div>
            </div>
            <h2>Description:</h2>
            {isVisible && (<h2>{task.description}</h2>)}
            {!isVisible && (<input className="edit-input" type="text" name="description" placeholder={task.description} onChange={(event) => handleDescriptionChange(task.id, event)}></input>)}
            {isVisible && (<h3><span>Priority: {task.priority}</span>  Due: {task.dueDate}</h3>)}

            {!isVisible && (<>
                <label htmlFor="priority">Priority:</label>
                <select defaultValue={task.priority} onChange={(event) => handlePriorityChange(task.id, event)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <label htmlFor="dueDate">Due Date:</label>
                <input className="edit-date" type="date" name="dueDate" defaultValue={task.dueDate} onChange={(event) => handleDateChange(task.id, event)}></input>
            </>)}


            <button onClick={() => handleClick(parseInt(task.id))}>Edit</button>
            {!isVisible && (<button onClick={handleSave}>Save</button>)}
        </div>
    )
}