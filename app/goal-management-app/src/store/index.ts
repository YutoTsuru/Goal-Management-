import { createStore } from 'redux';
import { combineReducers } from 'redux';

// Initial state for goals
const initialGoalsState = {
  goals: [],
};

// Goals reducer
const goalsReducer = (state = initialGoalsState, action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return { ...state, goals: [...state.goals, action.payload] };
    case 'REMOVE_GOAL':
      return { ...state, goals: state.goals.filter(goal => goal.id !== action.payload) };
    case 'UPDATE_GOAL':
      return {
        ...state,
        goals: state.goals.map(goal => (goal.id === action.payload.id ? action.payload : goal)),
      };
    default:
      return state;
  }
};

// Initial state for tasks
const initialTasksState = {
  tasks: [],
};

// Tasks reducer
const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'REMOVE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === action.payload.id ? action.payload : task)),
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  goals: goalsReducer,
  tasks: tasksReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;