import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  min-width: 360px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 30px 15px;
`;

const WeatherApp = () => {
  return (
    <Container>
      <WeatherCard>
        Hi I'm first WeatherApp commit
      </WeatherCard>
    </Container>
  )
};

export default WeatherApp;