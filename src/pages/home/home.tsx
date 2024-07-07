import {useState, useCallback, memo, useEffect} from 'react';
import {Job} from '../../data/job'
import './home.scss';
import Search, {Filter} from "../../components/search/search";
import Detail from "../../components/detail/detail";
import JobList from "../../components/joblist/jobList";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {jobSearchAsync} from "../../redux/thunks/job";

const Home = memo(() => {
    console.log('home render');

    const [ filter, setFilters ] = useState<Filter| null>(null);
    const [ jobList, setJobList ] = useState<Job[] | []>([]);
    const [ detail, setDetail ] = useState<Job | null>(null);

    const cacheSearch = useSelector((state: RootState) => state.job.cacheSearch);
    const dispatch = useDispatch<AppDispatch>();


    const detailClicked = useCallback((job: Job) => {
        setDetail(job);
    }, []);

    const search = useCallback((filter: Filter) => {
        setFilters(filter);
        dispatch(jobSearchAsync(filter));
    }, []);

    useEffect(() => {
        console.log('Home Effect AAA')
        if (cacheSearch) {
            setJobList(cacheSearch.jobs);
            setFilters(cacheSearch.filters);
            console.log('Home Effect BBB')
        }
    }, [cacheSearch])

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