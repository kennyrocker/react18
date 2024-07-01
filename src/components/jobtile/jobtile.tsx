import { Job } from '../../data/job';
import './jobtile.scss';
import { formatCurrency, getTimeAgo } from "../../utils/util";
import { memo } from "react";

type JobTileProps = {
    job: Job,
    onClick: () => void
}

const JobTile = memo((props: JobTileProps) => {
    console.log("JobTile render");

    const { job, onClick } = props;

    return (
        <div className="job-tile" onClick={onClick}>
            <div className="company">{job.company}</div>
            <div className="title">{job.title}</div>
            {
                job.meta.length > 0 && (
                    <div className="meta">
                        { job.meta.map((i, index) => (
                            <div className="meta-item" key={index}>- {i}</div>
                        )) }
                    </div>
                )
            }
            <div className="type">{job.type}</div>
            <div className="salary">{formatCurrency(job.salary.max)}</div>
            <div className="ago">{getTimeAgo(job.postDate)}</div>
        </div>
    );
});

export default JobTile;
