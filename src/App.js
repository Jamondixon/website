import {Switch, Route, useLocation} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import './App.css';
import '../src/Components/Loader/Loader.css'
import Loader from './Components/Loader/Loader';
import React, { useState, useEffect } from 'react'

function App() {

const [loading, setLoading] = useState(false);
const [currentLink, setCurrentLink] = useState('');

useEffect(() => {
  setLoading(true)
  setTimeout(() => setLoading(false), 1800)
}, [currentLink])

useEffect(() => {
  setTimeout(() => setLoading(false), 3500)
  updateLink(window.location.href)
}, [])

const updateLink = (path) => {
  setCurrentLink(path)
}


  let location = useLocation();
  return (
    <>
      <div className="app" >
        <Loader loadState={loading}/> 
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} loadState={loading}/>
          <Route path='/resume' exact component={Resume} loadState={loading}/>
          <Route path='/projects' exact component={Projects} loadState={loading}/>
          <Route path='/blogs' exact component={Blogs} loadState={loading}/>
          <Route path='/contact' exact component={Contact} loadState={loading}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
