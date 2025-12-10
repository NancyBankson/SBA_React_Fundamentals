import { useState } from 'react'
import { useEffect } from 'react'
import type { Task, TaskPriority } from './types'
import type { TaskStatus } from './types'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'
import type { TaskListProps } from './types'
import { TaskFilter } from './components/TaskFilter/TaskFilter'

function App() {
  const [tasks, settasks] = useState([
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
  ])
  const [filteredTasks, setfilteredTasks] = useState<Task[]>([]);

  const [filters, setfilters] = useState<TaskFilter>({
    status: [],
    priority: []
  })

  const sortAndFilterTasks = (filterObj: TaskFilter) => {
      return tasks.filter(task => {
        return (filterObj.status.length > 0 ? filterObj.status.includes(task.status) : true) && (filterObj.priority.length > 0 ? filterObj.priority.includes(task.priority) : true)
      })
  }

  useEffect(() => {
    const task = sortAndFilterTasks(filters);
    setfilteredTasks(tasks);
  }, [filters, tasks])

  const newTasks: TaskListProps = {
    tasks: tasks as Task[],
    onStatusChange: (taskId: string, newStatus: TaskStatus) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        } 
        return task;
      });
      settasks(updatedTasks);
    },
    onDelete: (taskId: string) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      settasks(updatedTasks);
    }
  }
  
//  const originalTasks = [...tasks];

  // const [originalTasks, setorigi]

  // function onStatusFilter(status: TaskStatus) {
  //   const newTasks = originalTasks.filter(originalTask => originalTask.status === status);
  //   settasks(newTasks);
  // }

  // function onPriorityFilter(priority: TaskPriority) {
  //   const newTasks = tasks.filter(task => task.priority === priority);
  //   settasks(newTasks);
  // }

  return (
    <>
      <TaskFilter 
        filters={filters}
        setFilters={setfilters}
      />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={newTasks.onStatusChange}
        onDelete={newTasks.onDelete}
      />
    </>
  )
}

export default App
