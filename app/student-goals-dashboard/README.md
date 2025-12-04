# Student Goals Dashboard

This project is a student goal management application built with React and Tailwind CSS. It provides a user-friendly interface for students to manage their goals, track progress, and stay organized.

## Project Structure

The project is organized as follows:

```
student-goals-dashboard
├── src
│   ├── index.jsx          # Entry point of the application
│   ├── App.jsx            # Main application component
│   ├── pages
│   │   └── Dashboard.jsx   # Dashboard screen component
│   ├── components
│   │   ├── Header.jsx      # Header component with title and navigation
│   │   ├── Sidebar.jsx     # Sidebar component with navigation links
│   │   ├── GoalList.jsx    # Component to display today's tasks
│   │   ├── GoalCard.jsx    # Card component to show goal progress
│   │   └── ProgressBar.jsx  # Component to visually represent progress
│   ├── hooks
│   │   └── useGoals.js     # Custom hook for managing goal data
│   ├── contexts
│   │   └── GoalsContext.jsx # Context for sharing goal data across the app
│   └── styles
│       └── index.css       # CSS file for Tailwind styles
├── public
│   └── index.html          # HTML template for the application
├── package.json            # Project dependencies and scripts
├── tailwind.config.cjs     # Tailwind CSS configuration file
├── postcss.config.cjs      # PostCSS configuration file
├── vite.config.js          # Vite configuration file
└── README.md               # Project documentation
```

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd student-goals-dashboard
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Features

- **Dashboard**: A responsive dashboard that displays various widgets for managing goals.
- **Goal Management**: Add, edit, and track goals with visual progress indicators.
- **Custom Hooks**: Use of custom hooks for managing state and data.
- **Context API**: Share goal data across components using React's Context API.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.