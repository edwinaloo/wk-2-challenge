import React from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

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

  return (
    <div>
      <BotCollection onAddToArmy={addToArmy} />
      <YourBotArmy
        army={army}
        onReleaseFromArmy={releaseFromArmy}
        onDischarge={dischargeBot}
      />
    </div>
  );
}


export default App;
