import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    // Check if the bot is already in the army
    const isBotInArmy = army.some((b) => b.id === bot.id);
    if (!isBotInArmy) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try {
      // Delete the bot from the backend
      await axios.delete(`http://localhost:8001/bots/${bot.id}`);
      // Remove the bot from the army state
      releaseFromArmy(bot);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  useEffect(() => {
    // Fetch initial bot data from the server
    const fetchBots = async () => {
      try {
        const response = await axios.get('http://localhost:8001/bots');
        setArmy(response.data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchBots();
  }, []);

  return (
    <div>
      <BotCollection onAddToArmy={addToArmy} />
      <YourBotArmy
        army={army}
        onReleaseFromArmy={releaseFromArmy}
        onDischarge={dischargeBot}
      />
      <Router>
        <div>{/* Routes go here */}</div>
      </Router>
    </div>
  );
}

export default App;
