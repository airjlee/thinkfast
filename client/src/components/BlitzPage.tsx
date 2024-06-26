import React, { useState } from 'react';
import BlitzGame from './BlitzGame';

/** Describes set of possible app page views */
// If page is editor, the page includes specific name to show the details of
type Mode = {kind: "Solo"} | { kind: "Multiplayer" }| undefined;    

type BlitzPageProps = {
    onBack: () => void;

}

const BlitzPage: React.FC<BlitzPageProps> = ({onBack}) => {
  const [mode, setMode] = useState<Mode>(undefined);

  const handleSoloClick = () => {
    setMode({kind: "Solo"})
  }

  const handleMultiClick  = () => {
    setMode({kind: "Multiplayer"})
  }

if(mode === undefined){
return (
    <div>
    <h1>Blitz</h1>
    <button onClick={onBack}>Back</button>
    <button  onClick={handleSoloClick}> Solo</button>
    <button  onClick={handleMultiClick}> Multiplayer</button>
   </div>
)} else if (mode.kind === "Solo"){
    return (
        <BlitzGame onBack={onBack}/>
)} else {
    return (
        <h1>What?</h1>
    )
}
    
}

export default BlitzPage;

