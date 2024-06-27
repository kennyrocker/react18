import {createContext, useState, useContext} from "react";
import {Job} from "../data/job";
import {Filter} from "../components/search/search";


type SearchT = {
    filter: Filter;
    results: Job[];
}

type AppContextT = {
    fullPage: Job;
    shortList: Job[];
    cacheSearch: SearchT;
    addToShortList: (job:Job) => void;
    showFullPage: (job: Job) => void;
    setCacheSearch: (search: SearchT) => void;
}

const AppContext = createContext<AppContextT | undefined>(undefined);

export const AppContextProvider = ({ children }) => {

    const [shortList, setShortList] = useState([]);
    const [fullPage, setFullPage] = useState();

    const [cacheSearch, setSearchResults] = useState();

    const addToShortList = (item: Job) => {
        if (shortList.find(i => i.id === item.id)){
            return;
        }
        setShortList([...shortList, item]);
    }

    const showFullPage  = (job: Job) => {
        setFullPage(job);
    }

    const setCacheSearch = (search: SearchT) => {
        setSearchResults(search);
    }

    return (
        <AppContext.Provider
            value={ { shortList, fullPage, cacheSearch, addToShortList, showFullPage, setCacheSearch } }>
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

