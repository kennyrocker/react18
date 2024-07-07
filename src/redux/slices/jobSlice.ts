import {Job} from "../../data/job";
import {Filter} from "../../components/search/search";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {jobSearchAsync} from "../thunks/job";

interface SearchResults {
    jobs: Job[];
    filters: Filter;
}

type JobSliceT = {
    fullPage: Job | undefined;
    shortList: Job[] | [];
    cacheSearch: SearchResults | undefined;
}

const initialState: JobSliceT = {
    fullPage: undefined,
    shortList: [],
    cacheSearch: undefined
}


//@ts-ignore
const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        addToShortList: (state, action: PayloadAction<Job>) => {
            for (let i = 0; i < state.shortList.length; i++) {
                if (state.shortList[i].id === action.payload.id) return;
            }
            //@ts-ignore
            state.shortList.push(action.payload);
        },
        setFullPage: (state, action: PayloadAction<Job>) => {
            state.fullPage = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(jobSearchAsync.pending, () => {
                console.log("job search away .....");
             })
            .addCase(jobSearchAsync.fulfilled, (state, action) => {
                state.cacheSearch = action.payload;
            })
    }
});

export const { addToShortList, setFullPage } = jobSlice.actions;
export default jobSlice.reducer;