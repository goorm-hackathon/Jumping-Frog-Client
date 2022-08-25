import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';

const Information = () => {
  const [jobData, setJobData] = useState([]);
  // GET 전체 데이터
  const getDataFromApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
    setJobData(response.data);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <Container>
      {jobData && jobData.map((d, idx) => <Post key={idx} data={d} />)}
    </Container>
  );
};

export default Information;

const Container = styled.div`
  padding: 5px;
`;
