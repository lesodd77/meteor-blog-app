// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { MainRoutes } from './components/main/MainRoutes';
import { Navbar } from './Navbar'

export const App = () => (
    <>

    <div>
    <Router> 
  <Navbar />
    <div className="dark:bg-slate-800 bg-white ring-slate-900/5  dark:text-white">
    <MainRoutes />
    </div>
 
        <Outlet />
        </Router>
    
    </div>
    </>
);
