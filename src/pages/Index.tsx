import React from 'react';
import LoginCard from '../components/LoginPage/LoginCard';
import CenteredContainer from '../components/layout/CenteredContainer';

/**
 * IndexPage serves as the main entry point for the login screen.
 * It uses a CenteredContainer to place the LoginCard in the middle of the viewport.
 */
const IndexPage: React.FC = () => {
  return (
    <CenteredContainer>
      <LoginCard />
    </CenteredContainer>
  );
};

export default IndexPage;