import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.section`
  margin: 20px 0;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
  span {
    font-size: 20px;
  }
`;

const PR = styled.progress`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-bar {
    height: 14px;
    background-color: #f6f4ee;
    border-radius: 20px;
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.mainColor};
    border-radius: 20px;
  }
`;

const Progress = ({ percent }: { percent: number }) => {
  return (
    <>
      {!isNaN(percent) && (
        <ProgressBar>
          <Bar>
            <PR id="progress" max="100" value={percent}></PR>
          </Bar>
        </ProgressBar>
      )}
    </>
  );
};

export default Progress;
