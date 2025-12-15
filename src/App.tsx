import { useState } from 'react'
import type { Task, TaskStatus, TaskListProps, TaskFilters } from './types'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import { TaskForm } from './components/TaskForm/TaskForm'
import { Dashboard } from './components/Dashboard/Dashboard'
import { RetrieveSavedTasks } from './utils/taskUtils'

function App() {
  const [tasks, setTasks] = useState<Task[]>(RetrieveSavedTasks);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(RetrieveSavedTasks);

  // logic for Dashboard stats
  const [pendingStatus, setPendingStatus] = useState(0);
  const [inProgressStatus, setInProgressStatus] = useState(0);
  const [completedStatus, setCompletedStatus] = useState(0);
  const [lowPriority, setLowPriority] = useState(0);
  const [mediumPriority, setMediumPriority] = useState(0);
  const [highPriority, setHighPriority] = useState(0);
  // Added if then statements to prevent infinite loop
  let pendingStats: Task[] = tasks.filter(task => task.status === "Pending");
  if (pendingStats.length != pendingStatus) {
    setPendingStatus(pendingStats.length);
  }
  let inProgressStats: Task[] = tasks.filter(task => task.status === "In Progress");
  if (inProgressStats.length != inProgressStatus) {
    setInProgressStatus(inProgressStats.length);
  }
  let completedStats: Task[] = tasks.filter(task => task.status === "Completed");
  if (completedStats.length != completedStatus) {
    setCompletedStatus(completedStats.length);
  }
  let lowPriorityStats: Task[] = tasks.filter(task => task.priority === "Low");
  if (lowPriorityStats.length != lowPriority) {
    setLowPriority(lowPriorityStats.length);
  }
  let mediumPriorityStats: Task[] = tasks.filter(task => task.priority === "Medium");
  if (mediumPriorityStats.length != mediumPriority) {
    setMediumPriority(mediumPriorityStats.length);
  }
  let highPriorityStats: Task[] = tasks.filter(task => task.priority === "High");
  if (highPriorityStats.length != highPriority) {
    setHighPriority(highPriorityStats.length);
  }

  // Render list
  const newTasks: TaskListProps = {
    tasks: tasks as Task[],
    onTitleChange: (taskId: string, newTitle: string) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, title: newTitle };
        }
        return task;
      });
      let newTasks = [...updatedTasks];
      localStorage.setItem("taskArray", JSON.stringify(newTasks));
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    },
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
    onDescriptionChange: (taskId: string, newDescription: string) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, description: newDescription };
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
    },
    onAlphaChange: (sortAlpha: string) => {
      if (sortAlpha === "A-Z") {
        const sortedTasks = [...tasks].sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
        setFilteredTasks(sortedTasks);
      } else if (sortAlpha === "Z-A") {
        const sortedTasks = [...tasks].sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });
        setFilteredTasks(sortedTasks);
      }
    },
    onDateChange: (sortDate: string) => {
      if (sortDate === "Date Ascending") {
        const sortedTasks = [...tasks].sort((a, b) => {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        });
        setFilteredTasks(sortedTasks);
      } else if (sortDate === "Date Descending") {
        const sortedTasks = [...tasks].sort((a, b) => {
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        });
        setFilteredTasks(sortedTasks);
      }
    },
    onClick: (itemId: number) => {
      console.log(itemId);
    }
  }
  // Add task form submit
  function onSubmit(task: Task) {
    console.log(tasks);
    setTasks((prevTasks) => [...prevTasks, task]);
    setFilteredTasks((prevTasks) => [...prevTasks, task]);
    console.log("n", tasks);
    let newTasks = [...tasks];
    newTasks.push(task);
    localStorage.setItem("taskArray", JSON.stringify(newTasks));
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
      <h3 id="greeting">Jigglypuff says "Get some work done with my task manager!"</h3>
      <Dashboard
        pendingStatus={pendingStatus}
        inProgressStatus={inProgressStatus}
        completedStatus={completedStatus}
        lowPriority={lowPriority}
        mediumPriority={mediumPriority}
        highPriority={highPriority}
      />
      <TaskForm
        onSubmit={onSubmit}
      />
      <TaskFilter
        onSearchChange={onSearchChange}
        onFilterChange={onFilterChange}
      />
      <TaskList
        tasks={filteredTasks}
        onTitleChange={newTasks.onTitleChange}
        onStatusChange={newTasks.onStatusChange}
        onDescriptionChange={newTasks.onDescriptionChange}
        onDelete={newTasks.onDelete}
        onAlphaChange={newTasks.onAlphaChange}
        onDateChange={newTasks.onDateChange}
        onClick={newTasks.onClick}
      />
    </>
  )
}


export default App
