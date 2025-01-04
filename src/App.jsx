import {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar.jsx";
import {Route, Routes} from "react-router-dom";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Orders from "./pages/Orders.jsx";
import Login from "./components/Login.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export  const currency = '$'

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') ?localStorage.getItem('token'):'');

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token]);
    return (
        <div className={"bg-gray-50 min-h-screen"}>
            <ToastContainer />
            {token === ""
                ? <Login setToken={setToken} /> :
                <>
                    <Navbar setToken={setToken} />
                    <hr/>
                    <div className={"flex w-full"}>
                        <Sidebar/>
                        <div className={"w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray600 text-base"}>
                            <Routes>
                                <Route path='/add' element={<Add token={token} />}/>
                                <Route path='/list' element={<List token={token} />}/>
                                <Route path='/orders' element={<Orders token={token} />}/>
                            </Routes>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
export default App