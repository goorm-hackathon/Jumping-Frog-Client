import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import useModal from './hooks/useModal';
import Main from './pages/main/Main';
import NotFound from './pages/NotFound';
import Register from './pages/register/Register';
import SurveyInteresting from './pages/survey/survey-interesting/SurveyInteresting';
import SurveyJob from './pages/survey/survey-job/SurveyJob';
import SurveyMarket from './pages/survey/survey-market/SurveyMarket';
import SurveyUserAge from './pages/survey/survey-user-age/SurveyUserAge';
import SurveyUserGender from './pages/survey/survey-user-gender/SurveyUserGender';

function App() {
  const [getModalPage] = useModal();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<Layout />}>
          <Route path="/survey/age" element={<SurveyUserAge />} />
          <Route path="/survey/gender" element={<SurveyUserGender />} />
          <Route path="/survey/interest" element={<SurveyInteresting />} />
          <Route path="/survey/job" element={<SurveyJob />} />
          <Route path="/survey/market" element={<SurveyMarket />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      {getModalPage()}
    </Router>
  );
}

export default App;
