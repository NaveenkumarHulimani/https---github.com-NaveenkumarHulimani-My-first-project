import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import PostView from './components/PostView/PostView';
import FormPage from './components/Form/Form';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
           <Routes>
                <Route index element={ <LandingPage/> } />
                <Route path='/Postview' element={ <PostView/> } />
                <Route  path='FormPage' element={ <FormPage/> } />
           </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
