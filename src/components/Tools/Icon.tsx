import RoadmapIcon from "../Icons/Roadmap";
import ScheduleIcon from "../Icons/Schedule";
import TasksIcon from "../Icons/Tasks";
import NotesIcon from "../Icons/Notes";
import FilesIcon from "../Icons/Files";

export type IconNameType = "RoadMap" | "Schedule" | "Tasks" | "Notes" | "Files"

type IconProps = {
    color: string;
    iconName: IconNameType
}

const Icon = ({ color, iconName }: IconProps) => {
    const renderIcon = (iconName: IconNameType) => {
        switch (iconName) {
            case "RoadMap":
                return <RoadmapIcon color={color}/>
            case "Schedule":
                return <ScheduleIcon color={color}/>
            case "Tasks":
                return <TasksIcon color={color}/>
            case "Notes":
                return <NotesIcon color={color}/>
            case "Files":
                return <FilesIcon color={color}/>
            default:
                return <div>Default Icon</div>;
        }
    }

    return renderIcon(iconName);
}

export default Icon;