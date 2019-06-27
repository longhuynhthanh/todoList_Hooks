import * as TYPES from '../consts/index';
import callAPI from '../utils/callAPI';

//#region Fetch All Tasks
export const FetchAllTasksRequest = (dispatch) => {
    return callAPI('GET', 'task', null)
    .then(res => {
        dispatch(FetchAllTasks(res.data));
    })
}
const FetchAllTasks = (tasks) => {
    return {
        type: TYPES.FETCH_ALL_DATA,
        tasks
    }
}
//#endregion


//#region Detele Task
export const DeleteTaskRequest = (dispatch, id) => {
    return callAPI('DELETE', `task/${id}`, null)
    .then(res => {
        dispatch(DeleteTask(id));
    });
}
const DeleteTask = (id) => {
    return {
        type: TYPES.DELETE_TASK,
        id
    }
}
//#endregion

//#region Edit Task
export const EditTaskRequest = (dispatch, editTask) => {
    return callAPI('PUT', `task/${editTask.id}`, editTask)
    .then(res => {
        dispatch(EditTask(editTask));
    })
}

const EditTask = (editTask) => {
    return {
        type: TYPES.EDIT_ITEM,
        editTask
    }
}
//#endregion

//#region Toggle Form
export const ToggleForm = () => {
    return {
        type: TYPES.TOGGLE_FORM
    }
}
//#endregion

//#region Add Task
export const AddTaskRequest = (dispatch, task) => {
    return callAPI('POST', 'task', task)
    .then(res => {
        dispatch(AddTask(task));
    })
}

const AddTask = (task) => {
    return {
        type: TYPES.Add_TASK,
        task
    }
}
//#endregion

//#region Search Tasks
export const SearchTasks = (string) => {
    return {
        type: TYPES.SEARCH_TASKS,
        string
    }
}
//#endregion