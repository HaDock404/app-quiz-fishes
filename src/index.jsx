import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'
import ScrollToTop from "./styles/ScrollToTop";
import HomePage from './pages/HomePage';
import Quiz from './pages/Quiz.jsx';
import RandomQuiz from './pages/RandomQuiz.jsx';
import TenRandomQuiz from './pages/TenRandomQuiz.jsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
      <GlobalStyle/>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/random-quiz" element={<RandomQuiz />}/>
          <Route path="/ten-random-quiz" element={<TenRandomQuiz />}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
