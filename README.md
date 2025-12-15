# SBA 9 React Task Dashboard Application

## Overview

The purpose of this assignment was to create a Task Management Dashboard Application.  It required understanding of React fundamentals including state management, form handling, component composition, and TypeScript integration.

## Features

Implementation of this project required: 

Type Definitions (types/index.ts)

Define TypeScript interfaces for:

- Task data structure
- Component props
- Form data
- Filter options

Task Management Components

1. TaskList Component:

- Implement list rendering with proper key management
- Handle task status updates
- Implement task addition
- Implement task deletion
- Add sorting functionality
- Add a search bar to search for tasks

2. TaskForm Component:

- Create a controlled form for adding/editing tasks
- Implement form validation
- Handle form submission
- Show validation feedback

3. TaskFilter Component:

- Implement filtering by status and priority
- Add search functionality
- Show active filter indicators

4. Dashboard Component:

- Compose all components into a cohesive dashboard
- Implement responsive layout
- Add task statistics
- Handle component communication

5. Utility Functions

- Implement task filtering logic
- Add sorting functions
- Create validation helpers
- Add date formatting utilities

6. Data Persistence

- Add localStorage integration
- Implement data export/import

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Vite

To Run this React application, follow the following steps in the terminal:
npm create vite@latest
cd task-dashboard
npm install
npm run dev

## Reflection

To say this assignment was a challenge is an extreme understatement.  I believe I have spent at least 25 hours working on this application.  One of the things I found difficult was making the application modular.  Sometimes it is difficult to figure out where it is best to put the logic.  For example, I first added the stats logic to the Dashboard component, but then I realized that it did not reflect the latest changes it needed to work in conjunction with the task state on the main tsx page.  Figuring out things like that required a lot of trial and error because this was our first real use of React.  It made the assignment extremely time consuming.  It took me 3 hours just to configure the sorting.  I also spent a lot of of time just thinking.  At first, I could not think of a way to implement the edit functions since data can't flow back to the components, where the input form is located.  I finally decided to use the TaskItem component with hidden inputs.  It would have been nice to see an example of how to implement edits.  I would like to make some more improvements such as updating the style and adding a dark mode toggle, but I need more time for that.  This assignment taught me a lot.  Hopefully, I will be able to implement the things I've learned much faster in the future.