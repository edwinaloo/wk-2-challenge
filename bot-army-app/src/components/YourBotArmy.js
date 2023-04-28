import React from 'react';

const YourBotArmy = ({ bots, releaseBot, dischargeBot }) => {
  const handleBotRelease = (bot) => {
    releaseBot(bot);
  };

  const handleBotDischarge = (bot) => {
    dischargeBot(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {bots.map((bot) => (
          <div className="bot-card" key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => handleBotRelease(bot)}>Release</button>
            <button className="discharge-btn" onClick={() => handleBotDischarge(bot)}>
              Discharge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;

