import { Job } from '../../data/job';
import './jobtile.scss';
import {formatCurrency, getTimeAgo} from "../../utils/util";

type JobTileProps = {
    job: Job,
    onClick: () => void
}

export default function JobTile(props: JobTileProps) {
    const { job, onClick } = props;

    return (
        // <div className="job-tile" onClick={()=>{ toDetail(job.id) }}>
        <div className="job-tile" onClick={onClick}>
            <div className="company">{job.company}</div>
            <div className="title">{job.title}</div>

                {
                    job.meta.length &&
                        <div className="meta">
                            { job.meta.map((i, index) =>
                                <div className="meta-item" key={index}>- {i}</div> ) }
                        </div>
                }

            <div className="type">{job.type}</div>
            <div className="salary">{formatCurrency(job.salary.max)}</div>
            <div className="ago">{getTimeAgo(job.postDate)}</div>
        </div>
    )
}