import type { TaskListProps } from "../../types";
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}