import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header'
import {lazy, Suspense} from "react";
import './App.scss'
import {Provider} from "react-redux";
import {store} from "./redux/store";


const Home = lazy(() => import('./pages/home/home'));
const Shortlisted = lazy(() => import('./pages/shortlisted/shortlisted'));
const DetailPage = lazy(() => import('./pages/detail/detailPage'));

function App() {

  return (
    <>
        <Provider store={store}>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shortlisted" element={<Shortlisted />}></Route>
                    <Route path="/detail/:id" element={<DetailPage />}></Route>
                </Routes>
            </Suspense>
        </Provider>

    </>
  )
}

export default App
