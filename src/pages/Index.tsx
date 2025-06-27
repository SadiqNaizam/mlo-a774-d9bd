import React from 'react';
import LoginCard from '../components/LoginPage/LoginCard';

/**
 * IndexPage serves as the main entry point for the login screen.
 * It provides the overall layout, centering the LoginCard in the middle of the viewport.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-background">
      <LoginCard />
    </main>
  );
};

export default IndexPage;
