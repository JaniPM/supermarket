import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
`;

const HomeView = () => (
  <StyledView>
    <Text>Home is here!</Text>
  </StyledView>
);

export default HomeView;
