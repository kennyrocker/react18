import {memo, useCallback, useEffect, useState} from "react";
import {formatCurrency} from "../../utils/util";
import {Job} from "../../data/job";
import Pagination from "../pagination/pagination";
import JobTile from "../jobtile/jobtile";
import "./jobList.scss";
import {Filter} from "../search/search";

type JobListT = {
    jobs: Job[],
    filter: Filter | undefined,
    onItemClick: (item: Job) => void
}
const JobList = memo((props: JobListT) => {

    const { jobs, filter, onItemClick } = props;
    console.log('JobList render');

    const [ currentWindow, setCurrentWindow ] = useState<Job[] | undefined>(undefined);
    const [ totalPages, setTotalPages] = useState<number[] | []>([]);
    const [ currentPage, setCurrentPage ] = useState(0);
    const PAGE_SIZE = Math.floor(( window.innerHeight - 207 ) / 184) === 0 ? 1 : Math.floor(( window.innerHeight - 207 ) / 184);

    useEffect(() => {
        if (jobs.length > 0) {
            setPage(0);
            initPagination();
        }
    }, [jobs])


    const setPage = useCallback((page: number) => {
        if (page === 0 && jobs.length > PAGE_SIZE) {
            setCurrentWindow(jobs.slice(0, PAGE_SIZE));
            setCurrentPage(0);
        } else if ( jobs.length > (page * PAGE_SIZE) ) {
            const start = page * PAGE_SIZE;
            const end = (page + 1) * PAGE_SIZE;
            setCurrentWindow(jobs.slice(start, end));
            setCurrentPage(page);
        }
    }, [jobs]);


    const initPagination = () => {
        if (jobs.length > PAGE_SIZE) {
            let total = Math.ceil(jobs.length / PAGE_SIZE);
            const temp: number[] = [];
            for (let i = 1; i <= total; i++) {
                temp.push(i);
            }
            setTotalPages(temp);
        } else {
            setTotalPages([]);
        }
    };


    const formatSearchTerms = () => {
        if (!filter) return '';
        const terms = filter.terms ? filter.terms + ' ' : '';
        const type = filter.jobType ? filter.jobType + ' ' : '';
        const salary = filter.minSalary > 0 ? formatCurrency(filter.minSalary)+'+ ' : '';
        const location = filter.remote ? filter.remote + ' ' : ''
        return terms + type + salary + location;
    }

    return (
        <>
            {
                !currentWindow || currentWindow.length === 0 ?
                    <div>No Jobs Listed</div>
                    :
                    <div className="job-list">
                        { currentWindow.map((item) => (
                            <JobTile
                                job={item}
                                key={item.id}
                                onClick={() => { onItemClick(item); }} />
                        ))}
                    </div>
            }

            <div className="total-page">
                {
                    jobs.length > 0 &&
                    <>
                         <span className="search-terms">
                             {formatSearchTerms()}
                         </span>
                        { jobs.length } results
                    </>
                }
            </div>

            <Pagination totalPages={totalPages}
                        currentPage={currentPage}
                        onClick={setPage}>
            </Pagination>
        </>
    );
});
export default JobList;