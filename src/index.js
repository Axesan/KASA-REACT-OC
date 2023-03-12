import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import './styles/index.scss';
import ViewCard from './pages/ViewCard';


const root = ReactDOM.createRoot(document.getElementById('root'));


// Routeur
root.render(
 
  <BrowserRouter>
   
   <Navigation/>
   <main>
      <Routes>
        <Route activeClassName="active" path="/" element={<Home />}/>
        <Route activeClassName="active" path="/a-propos" element={<Apropos />}/>
        <Route path="/views/:title/:id"  element={<ViewCard/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer/>

    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
