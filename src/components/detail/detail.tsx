import {Job} from "../../data/job";
import {memo} from "react";
import {addToShortList} from "../../redux/slices/jobSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";


type DetailProps = {
    job: Job;
}

const Detail = memo((props: DetailProps) => {

    console.log("Detail render")

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="job-detail">
            <div>{ props.job.company }</div>
            <div>{ props.job.title }</div>
            <div>{ props.job.type }</div>
            <button onClick={() => dispatch(addToShortList(props.job)) }>Add To Short List</button>
        </div>
    )
});

export default Detail;