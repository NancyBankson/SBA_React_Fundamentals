// import { useState } from "react";
import type { TaskFilterProps } from "../../types";
// import type { TaskFilters } from "../../types";
import type { TaskStatus } from "../../types";
import type { TaskPriority } from "../../types";

export function TaskFilter({ onSearchChange, onFilterChange }: TaskFilterProps) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let searchTerm = event.target.value;
        onSearchChange(searchTerm);
    }

    return (
        <>
            <div id="filter-bar">
                <div>
                    <search>
                        <label htmlFor="search-task">Search tasks</label>
                        <input type="search" id="search-task" onChange={handleChange} />
                    </search>
                </div>
                <div>
                    <label>Status</label>
                    <select id="status-filter" defaultValue={"All"} onChange={(e) => onFilterChange({ status: (e.target.value as TaskStatus) || undefined })}>
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div>
                    <label>Priority</label>
                    <select id="priority-filter" defaultValue={"All"} onChange={(e) => onFilterChange({ priority: (e.target.value as TaskPriority) || undefined })}>
                        <option value="All">All Priorites</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>

        </>
    )
}