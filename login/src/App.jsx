import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import HomePage from '../src/Pages/HomePage';
import RegisterPage from '../src/Pages/RegisterPage';
import LoginPage from '../src/Pages/LoginPage';
import "./loginStyles.css";
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './Contexts/userContexts';
import Dashboard from './Pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <div className = 'main-div'>
        <Navbar/>
        <Toaster position ="bottom-right" toastOptions={{duration : 2000}}/>
        <Routes>
          <Route path = "/" element = {<HomePage/>} />
          <Route path = "/registerPage" element = {<RegisterPage/>} />
          <Route path = "/loginPage" element = {<LoginPage/> }/>
          <Route path = "/dashboard" element = {<Dashboard/> }/>

        </Routes>
      </div>
    </UserContextProvider>
   
  );
}

export default App;
