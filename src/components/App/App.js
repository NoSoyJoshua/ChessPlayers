import {useState, useEffect} from 'react';
import './App.css';

import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";
import DataDisplayer from '../DataDisplayer/DataDisplayer';
import ApiError from '../ApiError/ApiError';
import ToolTip from '../ToolTip/ToolTip';

import {getPlayerInfo} from "../../functions/functions";

function App() {
  const [fideId, setFideId] = useState('');
  const [playerInfo, setPlayerInfo] = useState({});

  useEffect(() => {
    async function getData() {
      let data = await getPlayerInfo(fideId);
      if (fideId !== "") {
        setPlayerInfo(data[1]);
      }
    }

    getData();

  }, [fideId]);

  return (
    <div className="App">
      <Navbar />
      <Form setFideId={setFideId}/>
      {playerInfo.name !== undefined ? 
        (<DataDisplayer data={playerInfo}/>) :
        fideId === "" ?
          (<h1>Please enter a FIDE ID</h1>):
          playerInfo.errorCode !== undefined ?
            (<ApiError error={playerInfo} />) :
            (<h1>Loading...</h1>)
      }
      <ToolTip />
    </div>
  );
}

export default App;
