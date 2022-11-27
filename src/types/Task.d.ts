type TaskType = {
    id: string;
    name: string;
    time: number;
    deadline: number;
    isCompleted: boolean;
    color: string;
    status: TaskStatus;
}

type TaskStatus = "new" | "scheduled" | "inProgress" | "completed";

type addTaskCallback = (task: TaskType, status: TaskStatus, index: number) => void;
type removeTaskCallback = (task: TaskType, targetStatus: TaskStatus) => void;