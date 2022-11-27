import { createSlice } from '@reduxjs/toolkit'

const scheduledTasks: TaskType[] = [
    {
        name: "Check email",
        time: 20,
        id: "sc_001",
        color: "#FFDFBA",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "scheduled",
    },
    {
        name: "Write a blogpost \"7 best strategies for SEO in 2020\"",
        time: 300,
        id: "sc_002",
        color: "#FEC6B7",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "scheduled",
    },
    {
        name: "New Ad copies for Manamaja",
        time: 120,
        id: "sc_003",
        color: "#D9E6A2",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "scheduled",
    },
];

export const counterSlice = createSlice({
    name: 'scheduledTasks',
    initialState: {
        value: scheduledTasks
    },
    reducers: {
        addFromScheduledTask: (state, action: { payload: { index: number, task: TaskType } }) => {
            state.value = [
                ...state.value.slice(0, action.payload.index),
                {
                    ...action.payload.task,
                    status: "scheduled",
                    isCompleted: false
                },
                ...state.value.slice(action.payload.index),
            ]
        },
        changeScheduledTaskIndex: (state, action: { payload: { index: number, task: TaskType } }) => {
            const filteredState = state.value.filter(task => task.id !== action.payload.task.id);

            state.value = [
                ...filteredState.slice(0, action.payload.index),
                action.payload.task,
                ...filteredState.slice(action.payload.index),
            ]
        },
        removeFromScheduledTasks: (state, action) => {
            state.value = state.value.filter(task => task.id !== action.payload)
        }
    }
})

export const { removeFromScheduledTasks, addFromScheduledTask, changeScheduledTaskIndex } = counterSlice.actions

export default counterSlice.reducer