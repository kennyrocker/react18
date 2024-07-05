import {useNavigate} from 'react-router-dom';
import {Job} from "../../data/job";
import JobTile from "../../components/jobtile/jobtile";
import {useDispatch, useSelector} from "react-redux";
import {setFullPage} from "../../redux/slices/jobSlice";
import {AppDispatch, RootState} from "../../redux/store";


export default function Shortlisted() {
    const shortList = useSelector((state:RootState) => state.job.shortList);
    const dispatch = useDispatch<AppDispatch>();

    const nav = useNavigate();

    const openInDetailPage = (job: Job) => {
        dispatch(setFullPage(job));
        nav(`/detail/${job.id}`);
    }

    return (
        <div className="page">
            <div>Short List</div>
            {
                shortList.length > 0 ? shortList.map((i: Job, index) =>
                    <JobTile job={i} key={index} onClick={() => {openInDetailPage(i)}}></JobTile>
                ) : <div>No items have added.</div>
            }
        </div>
    )
}