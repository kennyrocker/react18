import React, {createContext, useState, useContext, ReactNode} from "react";
import {Job} from "../data/job";
import {Filter} from "../components/search/search";

type SearchResults = {
    jobs: Job[];
    filters: Filter;
}

type AppContextT = {
    fullPage: Job | undefined;
    shortList: Job[] | [];
    cacheSearch: SearchResults | undefined;
    addToShortList: (job:Job) => void;
    showFullPage: (job: Job) => void;
    cacheSearchResults: (searchResults: SearchResults) => void;
}

const AppContext = createContext<AppContextT | undefined>(undefined);

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {

     const [shortList, setShortList] = useState<Job[] | []>([]);
    const [fullPage, setFullPage] = useState<Job | undefined>(undefined);

    const [cacheSearch, setSearchResults] = useState<SearchResults | undefined>(undefined);

    const addToShortList = (item: Job) => {
        if (shortList.find((i: Job) => i.id === item.id)){
            return;
        }
        setShortList([...shortList, item]);
    }

    const showFullPage  = (job: Job) => {
        setFullPage(job);
    }

    const cacheSearchResults = (search: SearchResults) => {
        setSearchResults(search);
    }

    return (
        <AppContext.Provider
            value={ { shortList, fullPage, cacheSearch,  addToShortList, showFullPage, cacheSearchResults } }>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('appContext must be used within a AppContextProvider');
    }
    return context;
}

