import { createSlice } from '@reduxjs/toolkit'

const inProgressTasks: TaskType[] = [
    {
        name: "Check email",
        time: 20,
        id: "ip_001",
        color: "#FFDFBA",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "inProgress",
    },
    {
        name: "Record a video comment about last week's analytics report",
        time: 20,
        id: "ip_002",
        color: "#F2BAE1",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "inProgress",
    },
    {
        name: "Process all resumes for Content Marketer position",
        time: 60,
        id: "ip_003",
        color: "#FFDFBA",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "inProgress",
    },
];

export const counterSlice = createSlice({
    name: 'scheduledTasks',
    initialState: {
        value: inProgressTasks
    },
    reducers: {
        addInProgressTask: (state, action: { payload: { index: number, task: TaskType } }) => {
            state.value = [
                ...state.value.slice(0, action.payload.index),
                {
                    ...action.payload.task,
                    status: "inProgress",
                    isCompleted: false
                },
                ...state.value.slice(action.payload.index),
            ]
        },
        changeInProgressTaskIndex: (state, action: { payload: { index: number, task: TaskType } }) => {
            const filteredState = state.value.filter(task => task.id !== action.payload.task.id);

            state.value = [
                ...filteredState.slice(0, action.payload.index),
                action.payload.task,
                ...filteredState.slice(action.payload.index),
            ]
        },
        removeFromInProgressTasks: (state, action) => {
            state.value = state.value.filter(task => task.id !== action.payload)
        }
    }
})

export const { removeFromInProgressTasks, addInProgressTask, changeInProgressTaskIndex } = counterSlice.actions

export default counterSlice.reducer