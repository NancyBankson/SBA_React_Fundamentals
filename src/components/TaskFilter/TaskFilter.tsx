import type { TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";
import type { TaskPriority } from "../../types";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
 
    return (
        <>
            <div>
                <label>Status</label>
                <select id="status-filter" onChange={(e) => onFilterChange({ status : (e.target.value as TaskStatus) || undefined})}>
                    <option value="">"All Statuses"</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Priority</label>
                <select id="priority-filter" onChange={(e) => onFilterChange({ priority : (e.target.value as TaskPriority) || undefined})}>
                    <option value="">"All Priorites"</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </>
    )
}