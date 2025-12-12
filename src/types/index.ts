// types/index.ts
export type TaskStatus = 'All' | 'Pending' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
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

// types/index.ts
export interface TaskFilterProps {
  onFilterChange: (status: TaskStatus) => void;
}

export interface TaskFormProps {
  onSubmit: (task: Task) => void;
}
