import { configureStore } from '@reduxjs/toolkit'
import taksReducer  from './features/tasks/taskSlice';

export const store = configureStore({
    reducer: {
        task: taksReducer,
    },
});