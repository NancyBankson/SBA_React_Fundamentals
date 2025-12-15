import type { TaskListProps } from "../../types";
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onTitleChange, onStatusChange, onDescriptionChange, onDelete, onAlphaChange, onDateChange, onClick }: TaskListProps) {

    const handleAlphaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const alphaSort: string = event.target.value;
        onAlphaChange(alphaSort);
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const dateSort: string = event.target.value;
        onDateChange(dateSort);
    }

    return (
        <>
            <div>
                <label>Sort:</label>
                <select name="dateToggle" onChange={handleDateChange}>
                    <option value="">By Date</option>
                    <option value="Date Ascending">Date Ascending</option>
                    <option value="Date Descending">Date Descending</option>
                </select>
                <select name="alphaToggle" onChange={handleAlphaChange}>
                    <option value="">Alphabetically</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <div className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onTitleChange={onTitleChange}
                        onStatusChange={onStatusChange}
                        onDescriptionChange={onDescriptionChange}
                        onDelete={onDelete}
                        onClick={onClick}
                    />
                ))}
            </div>
        </>

    )
}