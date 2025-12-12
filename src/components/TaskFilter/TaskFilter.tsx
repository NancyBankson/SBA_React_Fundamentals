// import { useState } from "react";
import type { TaskFilterProps } from "../../types";
// import type { TaskFilters } from "../../types";
import type { TaskStatus } from "../../types";
// import type { TaskPriority } from "../../types";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
    // const [filters, setFilters] = useState("");
    //  This code caused an ifinite loop
    // const [filters, setFilters] = useState<TaskFilters>({
    //     status: "All",
    //     priority: "All"
    // });

    function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
        if (event.target.id === "status-filter") {
            const targetFilter = event.target.value as TaskStatus;
            onFilterChange(targetFilter);
        }
    }
    // onFilterChange(filters);

    return (
        <>
            <div>
                <label>Status</label>
                <select id="status-filter" defaultValue={"All"} onChange={handleFilterChange}>
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                {/* <label>Priority</label>
                <select id="priority-filter" defaultValue={"All"} onChange={(e) => onFilterChange({ priority : (e.target.value as TaskPriority) || undefined})}>
                    <option value="All">All Priorites</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select> */}
            </div>
        </>
    )
}