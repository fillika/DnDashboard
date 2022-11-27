import { useDispatch } from "react-redux";

import { addNewTask, changeNewTaskIndex, removeFromNewTasks } from "../../../../redux/slices/newTasks";
import {
    addFromScheduledTask,
    changeScheduledTaskIndex,
    removeFromScheduledTasks
} from "../../../../redux/slices/scheduledTasks";
import {
    addInProgressTask,
    changeInProgressTaskIndex,
    removeFromInProgressTasks
} from "../../../../redux/slices/inProgressTasks";
import {
    addCompletedTask,
    changeCompletedTaskIndex,
    removeFromCompletedTasks
} from "../../../../redux/slices/completedTasks";

function useTaskOperation(): [addTaskCallback, removeTaskCallback] {
    const dispatch = useDispatch();

    const addTask: addTaskCallback = (task, status, index) => {
        if (task.status !== status) {
            switch (status) {
                case "new":
                    dispatch(addNewTask({ task, index }));
                    break;
                case "scheduled":
                    dispatch(addFromScheduledTask({ task, index }));
                    break;
                case "inProgress":
                    dispatch(addInProgressTask({ task, index }));
                    break;
                case "completed":
                    dispatch(addCompletedTask({ task, index }));
                    break;
                default:
                    break;
            }
        } else {
            switch (status) {
                case "new":
                    dispatch(changeNewTaskIndex({ task, index }));
                    break;
                case "scheduled":
                    dispatch(changeScheduledTaskIndex({ task, index }));
                    break;
                case "inProgress":
                    dispatch(changeInProgressTaskIndex({ task, index }));
                    break;
                case "completed":
                    dispatch(changeCompletedTaskIndex({ task, index }));
                    break;
                default:
                    break;
            }
        }
    }

    const removeTask: removeTaskCallback = (task, targetStatus) => {
        if (targetStatus !== task.status) {
            switch (task.status) {
                case "new":
                    dispatch(removeFromNewTasks(task.id))
                    break;
                case "scheduled":
                    dispatch(removeFromScheduledTasks(task.id))
                    break;
                case "inProgress":
                    dispatch(removeFromInProgressTasks(task.id))
                    break;
                case "completed":
                    dispatch(removeFromCompletedTasks(task.id))
                    break;
                default:
                    break;
            }
        }
    }

    return [addTask, removeTask];
}

export default useTaskOperation;