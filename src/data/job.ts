export interface Job {
    id: string;
    title: string;
    company: string;
    location: JobLocation;
    type: string;
    salary: Salary;
    hourate?: number;
    weekhour?: number;
    dayhour?: number;
    postDate: number;
    meta: string[]
}

interface JobLocation {
    country: string;
    province: string;
    city: string;
}

interface Salary {
    min?: number;
    max: number;
}