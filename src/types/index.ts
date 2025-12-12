// types/index.ts
export type TaskStatus = 'All' | 'Pending' | 'In Progress' | 'Completed';

export type TaskPriority = 'All' | 'Low' | 'Medium' | 'High';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

export interface FormData {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
  onFilterChange: (filters: TaskFilters) => void;
}

export interface TaskFilters {
  status?: TaskStatus;
    priority?: TaskPriority;
}

export interface TaskFormProps {
  onSubmit: (task: Task) => void;
}
