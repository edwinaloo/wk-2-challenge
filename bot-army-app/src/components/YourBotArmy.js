import React from 'react';

const YourBotArmy = ({ bots, releaseBot }) => {
  const handleBotRelease = (bot) => {
    releaseBot(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {bots.map((bot) => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => handleBotRelease(bot)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
