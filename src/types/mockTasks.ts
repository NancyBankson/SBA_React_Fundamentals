import type { Task } from "."

export const mockTasks: Task[]  =
[
    {
      id: "1",
      title: "Buy groceries",
      description: "Get milk, bread, bananas",
      status: "Pending",
      priority: "Low",
      dueDate: "12/16/2025"
    },
    {
      id: "2",
      title: "Earn education",
      description: "Practice, practice, practice",
      status: "In Progress",
      priority: "High",
      dueDate: "05/08/2026"
    },
    {
      id: "3",
      title: "Win Nobel Prize",
      description: "Discover something great",
      status: "In Progress",
      priority: "Medium",
      dueDate: "05/08/2036"
    }
  ]