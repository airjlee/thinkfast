import React, { useState } from 'react';

/** Describes set of possible app page views */
// If page is editor, the page includes specific name to show the details of
 
type HomePageProps = {
    onBlitz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({onBlitz}) => {

  return (
   <div>
    <h1>ThinkFast</h1>
    <button  onClick={onBlitz}> Blitz </button>
   </div>
  );
}

export default HomePage;
