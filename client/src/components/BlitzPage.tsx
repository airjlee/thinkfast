import React, { useState } from 'react';

/** Describes set of possible app page views */
// If page is editor, the page includes specific name to show the details of
type Mode = {kind: "Solo"} | { kind: "Multiplayer" }| undefined;    

type HomePageProps = {
    onBack: () => void;

}

const BlitzPage: React.FC<HomePageProps> = ({onBack}) => {
  const [mode, setMode] = useState<Mode>(undefined);

  const handleSoloClick = () => {
    setMode({kind: "Solo"})
  }

  const handleMultiClick  = () => {
    setMode({kind: "Multiplayer"})
  }


  return (
   <div>
    <h1>Blitz</h1>
    <button onClick={onBack}>Back</button>
    <button  onClick={handleSoloClick}> Solo</button>
    <button  onClick={handleMultiClick}> Multiplayer</button>
   </div>
  );
}

export default BlitzPage;
