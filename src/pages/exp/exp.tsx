import { jobs } from '../../data/jobs.json';
import "./exp.scss";
import Detail from "../../components/detail/detail";
import JobList from "../../components/joblist/jobList";
import Search from "../../components/search/search";
import { memo, useCallback, useState } from "react";

// Experimental
const Exp = memo(() => {
    console.log('Exp render');


    const [detail, setDetail] = useState(null);
    const [filter, setFilter] = useState(null);
    const [data, setData] = useState([]);

    const itemClick = useCallback((item) => {
        setDetail(item);
    }, []);

    const filterChange = useCallback((filter) => {
        setFilter(filter);
        fakeAPICall(filter);
    }, []);

    const fakeAPICall = async(filter) => {
        console.log(filter);
        const reference = [ ...jobs ];
        const randomStart = Math.floor(Math.random() * 4);
        const randomEnd = Math.floor(Math.random() * 4) + 4;
        // @ts-ignore
        let fetchJobs = await reference.splice(randomStart, randomEnd);
        // @ts-ignore
        await setData(fetchJobs);
    }

    return (
        <div className="exp">
            <div className='top'>
                <Search onSearch={filterChange}/>
            </div>
            <div className="left">
                {/* @ts-ignore */}
                <JobList jobs={data} onItemClick={itemClick} filter={filter}/>
            </div>
            <div className="right">
                {  detail && <Detail job={detail} /> }
            </div>
        </div>
    );
});

export default Exp;
