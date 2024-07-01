import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header'
import {lazy, Suspense} from "react";
import './App.scss'
import {AppContextProvider} from "./context/appContext";
import Exp from "./pages/exp/exp";

const Home = lazy(() => import('./pages/home/home'));
const Shortlisted = lazy(() => import('./pages/shortlisted/shortlisted'));
const DetailPage = lazy(() => import('./pages/detail/detailPage'));

function App() {

  return (
    <>
        <AppContextProvider>
            <Header></Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route excat path="/" element={<Home />}></Route>
                    <Route excat path="/shortlisted" element={<Shortlisted />}></Route>
                    <Route excat path="/detail/:id" element={<DetailPage />}></Route>
                    <Route excat path="/exp" element={<Exp />}></Route>
                </Routes>
            </Suspense>
        </AppContextProvider>

    </>
  )
}

export default App
