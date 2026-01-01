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
  priority: TaskPriority;
  dueDate: string;
}

// export interface SortData {
//   priorityToggle: string;
//   dateToggle: string;
//   alphaToggle: string;  
// }

export interface TaskListProps {
  tasks: Task[];
  onTitleChange: (taskId: string, newTitle: string) => void;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDescriptionChange: (taskId: string, newDescription: string) => void;
  onPriorityChange: (taskId: string, newPriority: TaskPriority) => void;
  onDateUpdate: (taskId: string, newDate: string) => void;
  onDelete: (taskId: string) => void;
  onAlphaChange: (alphaSort: string) => void;
  onDateChange: (dateSort: string) => void;
  onClick: (itemId: number) => void;
}

export interface TaskItemProps {
  task: Task;
  onTitleChange: (taskId: string, newTitle: string) => void;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDescriptionChange: (taskId: string, newDescription: string) => void;
  onPriorityChange: (taskId: string, newPriority: TaskPriority) => void;
  onDateUpdate: (taskId: string, newDate: string) => void;
  onDelete: (taskId: string) => void;
  onClick: (itemId: number) => void;
}

export interface TaskFilterProps {
  onSearchChange: (searchTerm: string) => void;
  onFilterChange: (filters: TaskFilters) => void;
}

export interface TaskFilters {
  status?: TaskStatus;
  priority?: TaskPriority;
}

export interface TaskFormProps {
  onSubmit: (task: Task) => void;
}


export interface DashboardProps {
  pendingStatus: number;
  inProgressStatus: number;
  completedStatus: number;
  lowPriority: number;
  mediumPriority: number;
  highPriority: number;
}