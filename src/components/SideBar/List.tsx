import arrowDown from "../../images/down-arrow-svgrepo-com.svg";

type ListProps = {
    title: string
}

const List = ({ title }: ListProps) => {
    return <div>
        <span><img src={arrowDown} alt="arrow down"/></span>
        <div>{title}</div>
    </div>
}

export default List;