import { useState } from "react";
import type { Task } from "../../types";

export function Dashboard() {

    const [tasks, setTasks] = useState<Task[]>(() => {
        let retrievedArray: Task[] = [];
        const retrievedString: string | null = localStorage.getItem("taskArray");
        if (retrievedString) { retrievedArray = JSON.parse(retrievedString) };
        return retrievedArray;
    });
    const [pendingStatus, setPendingStatus] = useState(0);
    const [inProgressStatus, setInProgressStatus] = useState(0);
    const [completedStatus, setCompletedStatus] = useState(0);
    const [lowPriority, setLowPriority] = useState(0);
    const [mediumPriority, setMediumPriority] = useState(0);
    const [highPriority, setHighPriority] = useState(0);
    // Added if then statements to prevent infinite loop
    let pendingStats: Task[] = tasks.filter(task => task.status === "Pending");
    if (pendingStats.length != pendingStatus) {
        setPendingStatus(pendingStats.length);
    }
    let inProgressStats: Task[] = tasks.filter(task => task.status === "In Progress");
    if (inProgressStats.length != inProgressStatus) {
        setInProgressStatus(inProgressStats.length);
    }
    let completedStats: Task[] = tasks.filter(task => task.status === "Completed");
    if (completedStats.length != completedStatus) {
        setCompletedStatus(completedStats.length);
    }
    let lowPriorityStats: Task[] = tasks.filter(task => task.priority === "Low");
    if (lowPriorityStats.length != lowPriority) {
        setLowPriority(lowPriorityStats.length);
    }
    let mediumPriorityStats: Task[] = tasks.filter(task => task.priority === "Medium");
    if (mediumPriorityStats.length != mediumPriority) {
        setMediumPriority(mediumPriorityStats.length);
    }
    let highPriorityStats: Task[] = tasks.filter(task => task.priority === "High");
    if (highPriorityStats.length != highPriority) {
        setHighPriority(highPriorityStats.length);
    }

    return (
        <div id="stats-container">
            <div>
                <h3>Tasks by Status</h3>
                <div className="stats">
                    <div className="stat">
                        <label>Pending</label>
                        <p>{pendingStatus}</p>
                    </div>
                    <div className="stat">
                        <label>In Progress</label>
                        <p>{inProgressStatus}</p>
                    </div>
                    <div className="stat">
                        <label>Completed</label>
                        <p>{completedStatus}</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Tasks by Priority</h3>
                    <div className="stats">
                        <div className="stat">
                            <label>Low</label>
                            <p>{lowPriority}</p>
                        </div>
                        <div className="stat">
                            <label>Medium</label>
                            <p>{mediumPriority}</p>
                        </div>
                        <div className="stat">
                            <label>Low</label>
                            <p>{highPriority}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}