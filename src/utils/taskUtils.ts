import type { Task } from "../types";

export function RetrieveSavedTasks() {
    let retrievedArray: Task[] = [];
    const retrievedString: string | null = localStorage.getItem("taskArray");
    if (retrievedString) { retrievedArray = JSON.parse(retrievedString) };
    return retrievedArray;
}

export function RetrieveId() {
    let retrievedId: string = "";
    let retrievedIdArray: string | null = localStorage.getItem("savedId");
    if (retrievedIdArray) { retrievedId = JSON.parse(retrievedIdArray) };
    let nextId: number = 0;
    if (retrievedId) {
        nextId = parseInt(retrievedId[0]) + 1;
    } else nextId = 1;
    return nextId;
}