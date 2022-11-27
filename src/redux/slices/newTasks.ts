import { createSlice } from '@reduxjs/toolkit'

const newTasks: TaskType[] = [
    {
        name: "Check email",
        time: 20,
        id: "nt_001",
        color: "#ABE9CE",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "new",
    },
    {
        name: "Compare PPC agencies and make a report for Steven",
        time: 180,
        id: "nt_002",
        color: "#D8DCFF",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "new",
    },
    {
        name: "Meeting with Amanda (PR department)",
        time: 30,
        id: "nt_003",
        color: "#ABE9CE",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "new",
    },
    {
        name: "Get Patrick's approval for homepage new design",
        time: 20,
        id: "nt_004",
        color: "#D8DCFF",
        deadline: new Date().getTime(),
        isCompleted: false,
        status: "new",
    },
];

export const counterSlice = createSlice({
    name: 'newTasks',
    initialState: {
        value: newTasks
    },
    reducers: {
        addNewTask: (state, action: { payload: { index: number, task: TaskType } }) => {
            state.value = [
                ...state.value.slice(0, action.payload.index),
                {
                    ...action.payload.task,
                    status: "new",
                    isCompleted: false
                },
                ...state.value.slice(action.payload.index),
            ]
        },
        changeNewTaskIndex: (state, action: { payload: { index: number, task: TaskType } }) => {
            const filteredState = state.value.filter(task => task.id !== action.payload.task.id);

            state.value = [
                ...filteredState.slice(0, action.payload.index),
                action.payload.task,
                ...filteredState.slice(action.payload.index),
            ]
        },
        removeFromNewTasks: (state, action) => {
            state.value = state.value.filter(task => task.id !== action.payload)
        }
    }
})

export const { removeFromNewTasks, addNewTask, changeNewTaskIndex } = counterSlice.actions

export default counterSlice.reducer