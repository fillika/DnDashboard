type TaskType = {
    id: string;
    name: string;
    time: number;
    deadline: Date;
    isCompleted: boolean;
    color: string;
    status: "new" | "scheduled" | "inProgress" | "completed";
}