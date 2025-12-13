import { useState } from 'react'
import type { Task } from './types'
import type { TaskStatus } from './types'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'
import type { TaskListProps } from './types'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import type { TaskFilters } from './types'
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
    console.log(task);
    console.log(tasks);
    console.log("hi");
      setTasks((prevTasks) => [...prevTasks, task]);
   setFilteredTasks((prevTasks) => [...prevTasks, task]);

  }

  function onFilterChange(filters: TaskFilters) {
    const FilterTasks = tasks.filter(task => {
      // console.log(filters.status);
      // console.log(filters.priority);
      if (filters.status) {
        if (filters.status === "All") {
          return task;
        } else {
          return (filters.status === task.status);
        }
      }
      if (filters.priority) {
        if (filters.priority === "All") {
          return task;
        } else {
          return (filters.priority === task.priority);
        }
      }
    })
    setFilteredTasks(FilterTasks);
  }

  return (
    <>
      <img src="/jigglypuff.jpg" />
      <h3>Jigglypuff says "I'm still working on this one"</h3>
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
