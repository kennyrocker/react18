import {useState, useEffect} from 'react';
import {Job} from '../../data/job'
import {jobs} from '../../data/jobs.json'
import './home.scss';
import JobTile from "../../components/jobtile/jobtile";
import Pagination from "../../components/pagination/pagination";
import Search from "../../components/search/search";
import Filter from '../../components/search/search';
import Detail from "../../components/detail/detail";
import {formatCurrency} from "../../utils/util";

export default function Home() {

    const [ filter, setFilters ] = useState<Filter>({});
    const [ jobList, setJobList ] = useState<Job[]>([]);


    const [ detail, setDetail ] = useState<Job>(null);

    const [ currentWindow, setCurrentWindow ] = useState<Job[]>([]);
    const [ totalPages, setTotalPages] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(0);

    const PAGE_SIZE = Math.floor(( window.innerHeight - 207 ) / 184);


    useEffect(() => {
        if (jobList.length) {
            setPage(0);
            initPagination();
        }
    }, [jobList])

    const detailClicked = (jobId: string) => {
        const detail = jobs.find(j => j.id === jobId);
        setDetail(detail);
    }

    const setPage = (page: number) => {
        if (page === 0 && jobList.length > PAGE_SIZE) {
            setCurrentWindow(jobList.slice(0, PAGE_SIZE));
            setCurrentPage(0);
        } else if ( jobList.length > (page * PAGE_SIZE) ) {
            const start = page * PAGE_SIZE;
            const end = (page + 1) * PAGE_SIZE;
            setCurrentWindow(jobList.slice(start, end));
            setCurrentPage(page);
        }
    }

    useEffect(() => {
        setDetail(currentWindow[0]);
    }, [currentWindow])

    const initPagination = () => {
        if (jobList.length > PAGE_SIZE) {
            let total = Math.ceil(jobList.length / PAGE_SIZE);
            const temp = [];
            for (let i = 1; i <= total; i++) {
                temp.push(i);
            }
            setTotalPages(temp);
        }
    }

    const search = (filter: Filter) => {
        setFilters(filter);
        fakeApiCall();
    }

    const fakeApiCall = async()=>{
        const reference = [ ...jobs ];
        const randomStart = Math.floor(Math.random() * 4);
        const randomEnd = Math.floor(Math.random() * 4) + 4;
        let fetchJobs = await reference.splice(randomStart, randomEnd);
        await setJobList(fetchJobs);
    }

    const formatSearchTerms = () => {
        const terms = filter.terms ? filter.terms + ' ' : '';
        const type = filter.jobType ? filter.jobType + ' ' : '';
        const salary = filter.minSalary > 0 ? formatCurrency(filter.minSalary)+'+ ' : '';
        const location = filter.remote ? filter.remote + ' ' : ''
        return terms + type + salary + location;
    }


    return (
        <div className="page">

            <div className="filter">
                <Search onSearch={(filter) => { search(filter); }}></Search>
            </div>

            <div className="list">
                {
                    !currentWindow || currentWindow.length === 0 ?
                        <div>No Jobs Listed</div>
                        :
                        <div className="job-list">
                            {currentWindow.map((j:Job) =>
                                <JobTile job={j} key={j.id} onClick={() => { detailClicked(j.id) }}></JobTile>
                            )}
                        </div>
                }

                <div className="total-page">
                        <span className="search-terms">
                            {formatSearchTerms()}
                        </span>
                    { jobList.length } results
                </div>

                <Pagination totalPages={totalPages}
                            currentPage={currentPage}
                            onClick={(n) => { setPage(n) }}>
                </Pagination>

            </div>

            <div className="detail">
                { detail && <Detail job={detail}></Detail> }
            </div>

        </div>
    )
}