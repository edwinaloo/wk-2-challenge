import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy(prevArmy => [...prevArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection addToArmy={addToArmy} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;


