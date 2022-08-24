import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import End from './pages/end/End';
import Main from './pages/main/Main';
import Register from './pages/register/Register';
import SurveyInteresting from './pages/survey/survey-interesting/SurveyInteresting';
import SurveyJob from './pages/survey/survey-job/SurveyJob';
import SurveyMarket from './pages/survey/survey-market/SurveyMarket';
import SurveyUserInfo from './pages/survey/survey-userinfo/SurveyUserInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/survey/userinfo" element={<SurveyUserInfo />} />
        <Route path="/survey/interest" element={<SurveyInteresting />} />
        <Route path="/survey/job" element={<SurveyJob />} />
        <Route path="/survey/market" element={<SurveyMarket />} />
        <Route path="/register" element={<Register />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </Router>
  );
}

export default App;
