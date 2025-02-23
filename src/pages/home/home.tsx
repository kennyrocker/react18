import {useState, useCallback, memo, useEffect} from 'react';
import {Job} from '../../data/job'
import {jobs} from '../../data/jobs.json'
import './home.scss';
import Search, {Filter} from "../../components/search/search";
import Detail from "../../components/detail/detail";
import JobList from "../../components/joblist/jobList";
import {useAppContext} from "../../context/appContext";

const Home = memo(() => {
    console.log('home render');

    const [ filter, setFilters ] = useState<Filter| null>(null);
    const [ jobList, setJobList ] = useState<Job[] | []>([]);
    const [ detail, setDetail ] = useState<Job | null>(null);
    const { cacheSearch, cacheSearchResults } = useAppContext();


    const detailClicked = useCallback((job: Job) => {
        setDetail(job);
    }, []);

    const search = useCallback((filter: Filter) => {
        setFilters(filter);
        fakeAPICall(filter);
    }, []);

    const fakeAPICall = async(filter: Filter) =>{
        const reference = [ ...jobs ];
        const randomStart = Math.floor(Math.random() * 4);
        const randomEnd = Math.floor(Math.random() * 4) + 4;
        let fetchJobs = await reference.splice(randomStart, randomEnd);
        // @ts-ignore
        await setJobList(fetchJobs as Job[]);
        // @ts-ignore
        await cacheSearchResults({ jobs: fetchJobs, filters: filter });
    }

    useEffect(() => {
        if (cacheSearch) {
            setJobList(cacheSearch.jobs);
            setFilters(cacheSearch.filters);
        }
    }, [])

    return (
        <div className="page" role="content">

            <div className="filter">
                <Search onSearch={search}></Search>
            </div>

            <div className="list">
                {/* @ts-ignore */}
                <JobList jobs={jobList} onItemClick={detailClicked} filter={filter}/>
            </div>

            <div className="detail">
                { detail && <Detail job={detail}></Detail> }
            </div>

        </div>
    )
});
export default Home;