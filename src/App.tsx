import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import useModal from './hooks/useModal';
import Home from './pages/home/Home';
import Information from './pages/information/Infomation';
import Main from './pages/main/Main';
import NotFound from './pages/NotFound';
import Register from './pages/register/Register';
import SurveyInteresting from './pages/survey/survey-interesting/SurveyInteresting';
import SurveyJob from './pages/survey/survey-job/SurveyJob';
import SurveyMarket from './pages/survey/survey-market/SurveyMarket';
import SurveyQuestion from './pages/survey/survey-question/SurveyQuestion';
import SurveyQuestion2 from './pages/survey/survey-question2/SurveyQuestion2';
import SurveyUserAge from './pages/survey/survey-user-age/SurveyUserAge';
import SurveyUserGender from './pages/survey/survey-user-gender/SurveyUserGender';

function App() {
  const [getModalPage] = useModal();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route element={<Layout />}>
          <Route path="/survey/age" element={<SurveyUserAge />} />
          <Route path="/survey/gender" element={<SurveyUserGender />} />
          <Route path="/survey/interest" element={<SurveyInteresting />} />
          <Route path="/survey/job" element={<SurveyJob />} />
          <Route path="/survey/question1" element={<SurveyQuestion />} />
          <Route path="/survey/question2" element={<SurveyQuestion2 />} />
          <Route path="/survey/market" element={<SurveyMarket />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
        </Route>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      {getModalPage()}
    </Router>
  );
}

export default App;
