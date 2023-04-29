// App.js
import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try {
      await fetch(` http://localhost:8000/bots/${bot.id}`, {
        method: 'DELETE',
      });
      releaseFromArmy(bot);
    } catch (error) {
      console.log('Error discharging bot:', error);
    }
  };

  return (
    <div className="app">
      <h1>Bot Showdown</h1>
      <div className="bot-section">
        <BotCollection onAddToArmy={addToArmy} />
        <YourBotArmy
          army={army}
          onReleaseFromArmy={releaseFromArmy}
          onDischarge={dischargeBot}
        />
      </div>
    </div>
  );
};

export default App;
