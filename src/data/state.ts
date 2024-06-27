import {Job} from "./job";

export interface AppState {
    filter: SearchFilters;
    jobs: Job[] | [];
    shortListed: Job[] | [];
    applied: Job[] | [];
}


export interface SearchFilters {
    keywords: string[];
    fullTerm: string;
    jobType: string;
    postTime: number;
    location: string;
    salaryRange: number;
}