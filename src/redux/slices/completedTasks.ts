import { createSlice } from '@reduxjs/toolkit'

const completedTasks: TaskType[] = [
    {
        name: "Check email",
        time: 20,
        id: "comp_001",
        color: "#ABE9CE",
        deadline: new Date().getTime(),
        isCompleted: true,
        status: "completed",
    },
    {
        name: "Weekly planning session",
        time: 45,
        id: "comp_002",
        color: "#D8DCFF",
        deadline: new Date().getTime(),
        isCompleted: true,
        status: "completed",
    },
    {
        name: "Create 5+ target audiences in Facebook for Samsung ...",
        time: 150,
        id: "comp_003",
        color: "#ABE9CE",
        deadline: new Date().getTime(),
        isCompleted: true,
        status: "completed",
    },
    {
        name: "Check FB Banner Design and give feedback",
        time: 20,
        id: "comp_004",
        color: "#D8DCFF",
        deadline: new Date().getTime(),
        isCompleted: true,
        status: "completed",
    },
    {
        name: "Check email",
        time: 20,
        id: "comp_005",
        color: "#ABE9CE",
        deadline: new Date().getTime(),
        isCompleted: true,
        status: "completed",
    },
];

export const counterSlice = createSlice({
    name: 'newTasks',
    initialState: {
        value: completedTasks
    },
    reducers: {
        addCompletedTask: (state, action: { payload: { index: number, task: TaskType } }) => {
            state.value = [
                ...state.value.slice(0, action.payload.index),
                {
                    ...action.payload.task,
                    status: "completed",
                    isCompleted: true
                },
                ...state.value.slice(action.payload.index),
            ]
        },
        changeCompletedTaskIndex: (state, action: { payload: { index: number, task: TaskType } }) => {
            const filteredState = state.value.filter(task => task.id !== action.payload.task.id);

            state.value = [
                ...filteredState.slice(0, action.payload.index),
                action.payload.task,
                ...filteredState.slice(action.payload.index),
            ]
        },
        removeFromCompletedTasks: (state, action) => {
            state.value = state.value.filter(task => task.id !== action.payload)
        }
    }
})

export const { removeFromCompletedTasks, addCompletedTask, changeCompletedTaskIndex } = counterSlice.actions

export default counterSlice.reducer