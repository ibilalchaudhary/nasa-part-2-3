// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Navigation from './components/Navigation';
import NasaApiPage from './screens/Home';
import ServedFromStore from './screens/ServedFromStore';
import "./App.scss";

function App() {
    return (
        <Router>
            <Navigation />
            <Outlet />
            <Routes>
                <Route path="/" element={<NasaApiPage />} />
                <Route path="/served-from-store" element={<ServedFromStore />} />
            </Routes>
        </Router>
    );
}

export default App;
