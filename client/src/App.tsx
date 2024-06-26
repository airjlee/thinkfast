import React, { useState } from 'react';
import HomePage from './components/HomePage';
import BlitzPage from './components/BlitzPage'
import './App.css';

/** Describes set of possible app page views */
// If page is editor, the page includes specific name to show the details of
type Page = {kind: "Lobby"} | { kind: "Blitz" }| { kind: "Home"};    

function App() {
  const [page, setPage] = useState<Page>({kind: "Home"});

  const handleBlitz = () => {
    setPage({kind: "Blitz"});
  }

  const handleBack = () => {
    setPage({kind: "Home"});
  }

  if(page.kind === "Home"){
    return <HomePage onBlitz={handleBlitz} />
  } else if (page.kind === "Blitz"){
    return <BlitzPage 
            onBack={handleBack}
          />
  }

  return <div> hi</div>
}

export default App;
