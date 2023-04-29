// YourBotArmy.js
import React from 'react';
import Bot from './Bot';


const YourBotArmy = ({ army, onReleaseFromArmy, onDischarge }) => {
  const handleReleaseFromArmy = (bot) => {
    onReleaseFromArmy(bot);
  };

  const handleDischarge = (bot) => {
    onDischarge(bot);
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? <p>No bots enlisted in the army.</p> : null}
      {army.map((bot) => (
        <div key={bot.id} className="army-bot">
          <Bot
            bot={bot}
            onReleaseFromArmy={handleReleaseFromArmy}
            onDischarge={handleDischarge}
          />
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
