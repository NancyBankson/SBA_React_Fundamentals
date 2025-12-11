import { useState } from 'react'
import type { Task } from './types'
import type { TaskStatus } from './types'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'
import type { TaskListProps } from './types'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import type { TaskFilters } from './types'
import { mockTasks } from './types/mockTasks'

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [filteredTasks, setFilteredTasks] = useState(mockTasks);

  const newTasks: TaskListProps = {
    tasks: tasks as Task[],
    onStatusChange: (taskId: string, newStatus: TaskStatus) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
      setTasks(updatedTasks);
    },
    onDelete: (taskId: string) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  }

  //  Change logic to if then statements, if value is all, then set tasks to initial data
  function onFilterChange(filters: TaskFilters) {
    const FilterTasks = tasks.filter(task => {
      console.log(filters.status);
      console.log(filters.priority);
      if (filters.status) {
        if ((filters.status === "All") && ((filters.priority === "All") || (!filters.priority))) {
          return task;
        } else if (filters.priority === "All") {
          return (filters.status === task.status);
        } else if (filters.status === "All") {
          return (filters.priority === task.priority);
        } else return ((filters.status === task.status) && (filters.priority === task.priority));
      } else return 
    })
    setFilteredTasks(FilterTasks);
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
        onFilterChange={onFilterChange}
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
