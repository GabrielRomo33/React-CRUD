import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'task 1',
        description: 'this is a task Z',
        completed: false
    },
    {
        id: '2',
        title: 'task 2',
        description: 'this is a task Money',
        completed: false
    },
];

export const taksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                state.splice(state.indexOf(foundTask), 1);
            }
        },
        EditTask: (state, action ) => {
            const {id, title, description} = action.payload
            const foundTask = state.find(task => task.id === id);//crea la referencia a la tarea del arreglo de objetos
            if(foundTask){
                foundTask.title = title;
                foundTask.description = description;
            }
        }
    }
});

export const { addTask, deleteTask, EditTask } = taksSlice.actions

export default taksSlice.reducer