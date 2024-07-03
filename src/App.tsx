import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header'
import {lazy, Suspense} from "react";
import './App.scss'
import {AppContextProvider} from "./context/appContext";
// import Exp from "./pages/exp/exp";

const Home = lazy(() => import('./pages/home/home'));
const Shortlisted = lazy(() => import('./pages/shortlisted/shortlisted'));
const DetailPage = lazy(() => import('./pages/detail/detailPage'));

function App() {

  return (
    <>
        <AppContextProvider>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shortlisted" element={<Shortlisted />}></Route>
                    <Route path="/detail/:id" element={<DetailPage />}></Route>
                    {/*<Route path="/exp" element={<Exp />}></Route>*/}
                </Routes>
            </Suspense>
        </AppContextProvider>

    </>
  )
}

export default App
