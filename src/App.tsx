import { useState } from 'react'
import type { Task } from './types'
import type { TaskStatus } from './types'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'
import type { TaskListProps } from './types'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
// import type { TaskFilters } from './types'
import { mockTasks } from './types/mockTasks'
import { TaskForm } from './components/TaskForm/TaskForm'

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [filteredTasks, setFilteredTasks] = useState(mockTasks);

  const newTasks: TaskListProps = {
    tasks: tasks as Task[],
    onStatusChange: (taskId: string, newStatus: TaskStatus) => {
      console.log(taskId);
      console.log(newStatus);
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    },
    onDelete: (taskId: string) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setFilteredTasks(updatedTasks);
    }
  }

  function onSubmit(task: Task) {
    const updatedTasks=[...tasks, task];
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
  }

  function onFilterChange(status: TaskStatus) {
    const FilterTasks = tasks.filter(task => {
      if (status) {
        if (status === "All") {
          return task;
        } else {
          return (status === task.status);
        }
      }
    })
    setFilteredTasks(FilterTasks);
  }

  return (
    <>
      <TaskForm 
      onSubmit={onSubmit}
      />
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
