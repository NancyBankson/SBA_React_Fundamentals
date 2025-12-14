import { useState } from 'react'
import type { Task } from './types'
import type { TaskStatus } from './types'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'
import type { TaskListProps } from './types'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import type { TaskFilters } from './types'
import { TaskForm } from './components/TaskForm/TaskForm'
import { Dashboard } from './components/Dashboard/Dashboard'
import { RetrieveSavedTasks } from './utils/taskUtils'

function App() {
  const [tasks, setTasks] = useState<Task[]>(RetrieveSavedTasks);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(RetrieveSavedTasks);

  // Render list
  const newTasks: TaskListProps = {
    tasks: tasks as Task[],
    onStatusChange: (taskId: string, newStatus: TaskStatus) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });

      let newTasks = [...updatedTasks];
      localStorage.setItem("taskArray", JSON.stringify(newTasks));
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);

    },
    onDelete: (taskId: string) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);

      let newTasks = [...updatedTasks];
      localStorage.setItem("taskArray", JSON.stringify(newTasks));
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);

    }
  }

  // Add task form submit
  function onSubmit(task: Task) {
    setTasks((prevTasks) => [...prevTasks, task]);
    setFilteredTasks((prevTasks) => [...prevTasks, task]);
  }

  // Filter status or priority
  function onFilterChange(filters: TaskFilters) {
    const FilterTasks = tasks.filter(task => {
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

  // Search bar
  function onSearchChange(searchTerm: string) {
    const FilterTasks = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredTasks(FilterTasks);
  }

  return (
    <>
      <img src="/jigglypuff.jpg" />
      <h3>Jigglypuff says "I'm still working on this one"</h3>
      <Dashboard />
      <TaskForm
        onSubmit={onSubmit}
      />
      <TaskFilter
        onSearchChange={onSearchChange}
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
