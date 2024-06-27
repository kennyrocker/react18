import {useNavigate} from 'react-router-dom';
import {useAppContext} from "../../context/appContext";
import {Job} from "../../data/job";
import JobTile from "../../components/jobtile/jobtile";


export default function Shortlisted() {

    const { shortList, showFullPage } = useAppContext();
    const nav = useNavigate();

    const openInDetailPage = (job: Job) => {
        showFullPage(job);
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