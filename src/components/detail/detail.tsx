import {Job} from "../../data/job";
import {useAppContext} from "../../context/appContext";


type DetailProps = {
    job: Job;
}

export default function (props: DetailProps) {


    const { addToShortList } = useAppContext();

    return (
        <div className="job-detail">
            <div>{ props.job.company }</div>
            <button onClick={() =>{ addToShortList(props.job) }}>Add To Short List</button>
        </div>
    )
}