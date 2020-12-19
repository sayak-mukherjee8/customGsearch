import React from 'react';
import './App.css';
import Home from './Pages/Home.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SearchPage from './Pages/SearchPage';


function App() {
    return (
        <>
            <div className='app'>
                <Router>
                    <Switch>
                        <Route path='/search'>
                            <SearchPage />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default App;