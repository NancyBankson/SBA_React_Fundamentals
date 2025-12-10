import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {

    const listTasks = tasks.map( (task) => {
        return <TaskItem 
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
        />
    } )

    return (
        <>
        { listTasks }
        </>
        
    )
}