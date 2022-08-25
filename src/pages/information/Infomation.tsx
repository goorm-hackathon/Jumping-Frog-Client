import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';

const data = [
  {
    imgUrl: 'https://picsum.photos/200/300',
    jobName: '프론트엔드 개발자',
    jobSummary: '프론트엔드를 개발하는 사람',
    jobLink: 'https://naver.com',
  },
  {
    imgUrl: 'https://picsum.photos/200/300',
    jobName: '백엔드 개발자',
    jobSummary: '백엔드를 개발하는 사람',
    jobLink: 'https://naver.com',
  },
  {
    imgUrl: 'https://picsum.photos/200/300',
    jobName: '디자이너',
    jobSummary: '디자인을 개발하는 사람',
    jobLink: 'https://naver.com',
  },
  {
    imgUrl: 'https://picsum.photos/200/300',
    jobName: '기획자',
    jobSummary:
      '프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람프로젝트를 기획하는 사람',
    jobLink: 'https://naver.com',
  },
];

const Information = () => {
  const [jobData, setJobData] = useState();

  // // GET 전체 데이터
  // const getDataFromApi = async () => {
  //   const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
  //   setJobData(response.data);
  // };

  // useEffect(() => {
  //   getDataFromApi();
  // }, []);
  return (
    <Container>
      {data.map((d, i) => (
        <Post key={i} data={d} />
      ))}
    </Container>
  );
};

export default Information;

const Container = styled.div`
  padding: 10px;
`;
