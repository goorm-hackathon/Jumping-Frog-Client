import React from 'react';
import styled from 'styled-components';

interface IPostProps {
  imgUrl: string;
  jobName: string;
  jobSummary: string;
  jobLink: string;
}
const Post = ({ data }: { data: IPostProps }) => {
  const { imgUrl, jobName, jobSummary, jobLink } = data;
  const handleClick = () => {
    console.log(jobLink, '로 이동');
  };
  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <Image src={imgUrl}></Image>
      </ImageContainer>
      <JobContainer>
        <JobTitle>{jobName}</JobTitle>
        <Divider />
        <JobDescription>
          {jobSummary.length > 40
            ? `${jobSummary.slice(0, 40)}...`
            : jobSummary}
        </JobDescription>
      </JobContainer>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  background-color: #f6f4ee;
  margin: 20px 0;
  height: 130px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: 0.1s ease-in-out all;
  }
`;

const ImageContainer = styled.div`
  margin-left: 10px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const JobContainer = styled.div`
  margin-left: 20px;
  height: 100px;
`;

const JobTitle = styled.div``;

const Divider = styled.hr`
  border-top: 1.5px solid #bbb;
  width: 250px;
`;

const JobDescription = styled.span`
  margin-bottom: 10px;
`;
