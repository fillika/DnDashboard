import { configureStore } from '@reduxjs/toolkit'
import newTasks from "./slices/newTasks"
import scheduledTasks from "./slices/scheduledTasks"
import inProgressTasks from "./slices/inProgressTasks"
import completedTasks from "./slices/completedTasks"

const store = configureStore({
    reducer: {
        newTasks,
        scheduledTasks,
        inProgressTasks,
        completedTasks
    }
});

type RootState = ReturnType<typeof store.getState>

export const selectNewTasks = (state: RootState) => state.newTasks.value;
export const selectScheduledTasks = (state: RootState) => state.scheduledTasks.value;
export const selectInProgressTasks = (state: RootState) => state.inProgressTasks.value;
export const selectCompletedTasks = (state: RootState) => state.completedTasks.value;
export default store;