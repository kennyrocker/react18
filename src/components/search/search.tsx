import './search.scss';
import {memo} from "react";

export type Filter = {
    terms: string;
    minSalary: number;
    jobType: string;
    remote: string;
}

type SearchProps = {
    onSearch: (filter: Filter) => void;
}

const Search = memo((props: SearchProps) => {

    console.log('search render');

    let filters: Filter = {
        terms: "",
        minSalary: 70000,
        jobType: "fulltime",
        remote: "hybrid"
    }

    const patchFilter = (e: any) => {
        //@ts-ignore
        filters[e.target.id] = e.target.value;
    }

    const getFilter = () => {
        props.onSearch(filters);
    }

    return (
        <div className="search">

            <input className="terms" id="terms" type="text"
                   placeholder="search terms" onChange={patchFilter}/>

            <select name="minSalary" id="minSalary" onChange={patchFilter}>
                <option value="70000">$70,000+</option>
                <option value="100000">$100,000+</option>
                <option value="130000">$130,000+</option>
                <option value="150000">$150,000+</option>
            </select>

            <select name="jobType" id="jobType" onChange={patchFilter}>
                <option value="fulltime">fulltime</option>
                <option value="contract">contract</option>
            </select>

            <select name="remote" id="remote" onChange={patchFilter}>
                <option value="hybrid">hybrid</option>
                <option value="onsite">onsite</option>
                <option value="remote">remote</option>
            </select>

            <button onClick={getFilter}>Search</button>
        </div>
    )
});
export default Search;