import {createAsyncThunk} from "@reduxjs/toolkit";
import {Filter} from "../../components/search/search";
import {jobs} from "../../data/jobs.json";
import {Job} from "../../data/job";


export const jobSearchAsync = createAsyncThunk(
    "job/searchAsync",
    async (filter: Filter): Promise<any> => {

            const fetchJobs = await new Promise<Job[]>((resolve) => {
                    const reference = [ ...jobs ];
                    const randomStart = Math.floor(Math.random() * 4);
                    const randomEnd = Math.floor(Math.random() * 4) + 4;
                    const data = reference.splice(randomStart, randomEnd);
                    //@ts-ignore
                    setTimeout(() => resolve(data), 2000);
            });

            return { jobs: fetchJobs, filters: filter };

    }
);