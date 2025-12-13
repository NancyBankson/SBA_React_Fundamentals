import type { TaskItemProps } from "../../types";
import type { TaskStatus } from "../../types";

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLElement;
        const newStatus = event.target.value as TaskStatus;
        onStatusChange(target.id, newStatus)
    }

    const handleDelete = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const target = event.target as HTMLElement;
        onDelete(target.id);
    }
    return (
        <div key={task.id} className="task-container">
            <div className="title-row">
                <h1>{task.title}</h1>
                <select id={task.id} defaultValue={task.status} onChange={handleStatusChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <p id={task.id} className="delete-text" onClick={handleDelete}>Delete</p>
            </div>
            <h2>{task.description}</h2>
            <h3><span>Priority: {task.priority}</span>  Due: {task.dueDate}</h3>
        </div>
    )

}