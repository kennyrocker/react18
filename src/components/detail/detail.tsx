import {Job} from "../../data/job";
import {useAppContext} from "../../context/appContext";
import {memo} from "react";


type DetailProps = {
    job: Job;
}

const Detail = memo((props: DetailProps) => {

    console.log("Detail render")

    const { addToShortList } = useAppContext();

    return (
        <div className="job-detail">
            <div>{ props.job.company }</div>
            <div>{ props.job.title }</div>
            <div>{ props.job.type }</div>
            <button onClick={() =>{ addToShortList(props.job) }}>Add To Short List</button>
        </div>
    )
});

export default Detail;