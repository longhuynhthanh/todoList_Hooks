import * as TYPES from '../consts/index';
export const inittialState = {
    tasks: [],
    toogleForm: false
};

const reducer = (state = inittialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_ALL_DATA: {
            localStorage.setItem('tasks', JSON.stringify(action.tasks));
            return { ...state, tasks: action.tasks };
        }
        case TYPES.DELETE_TASK: {
            const newTasks = state.tasks.filter(task => task.id !== action.id);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return { ...state, tasks: newTasks };
        }
        case TYPES.EDIT_ITEM: {
            const index = state.tasks.findIndex(task => task.id === action.editTask.id);
            state.tasks[index] = {...state.tasks[index], imageURL: action.editTask.imageURL, name: action.editTask.name, level: action.editTask.level, description: action.editTask.description};
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
            return {...state};
        }
        case TYPES.TOGGLE_FORM: {
            return {...state, toogleForm: !state.toogleForm};
        }
        case TYPES.Add_TASK: {
            state.tasks.push(action.task);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
            return {...state};
        }
        case TYPES.SEARCH_TASKS: {
            const newData = [...JSON.parse(localStorage.getItem('tasks'))];
            const newTasks = newData.filter(task => task.name.toUpperCase().includes(action.string.toUpperCase()));
            return {...state, tasks: newTasks};
        }
        default: return {...state};
    }
}
export default reducer;