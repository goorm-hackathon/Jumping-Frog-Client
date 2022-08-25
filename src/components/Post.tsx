import React from 'react';
import styled from 'styled-components';

interface IPostProps {
  createdAt: string;
  imageUrl: string;
  isSent: boolean;
  jobCode: string;
  jobLink: string;
  jobName: string;
  jobSummary: string;
  jobVideo: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
const Post = ({ data }: { data: IPostProps }) => {
  const { imageUrl, jobName, jobSummary, jobVideo, jobLink } = data;
  console.log(imageUrl);
  const handleImageClick = () => {
    location.href = jobVideo;
  };

  const handleTitleClick = () => {
    location.href = jobLink;
  };

  return (
    <Container>
      <ImageContainer onClick={handleImageClick}>
        <Image src={imageUrl}></Image>
      </ImageContainer>
      <JobContainer>
        <JobTitle onClick={handleTitleClick}>{jobName}</JobTitle>
        <Divider />
        <JobDescription>
          {jobSummary.length > 70
            ? `${jobSummary.slice(0, 70)}...`
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
`;

const ImageContainer = styled.div`
  margin-left: 10px;
  &:hover {
    transform: scale(1.05);
    transition: 0.1s ease-in-out all;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const JobContainer = styled.div`
  margin-left: 20px;
  height: 100px;
`;

const JobTitle = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: 0.1s ease-in-out all;
  }
`;

const Divider = styled.hr`
  border-top: 1.5px solid #bbb;
  width: 250px;
`;

const JobDescription = styled.span`
  margin-bottom: 10px;
`;
