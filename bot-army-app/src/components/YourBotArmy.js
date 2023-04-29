import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  const handleReleaseBot = (bot) => {
    releaseBot(bot);
  };

  const handleDischargeBot = (bot) => {
    dischargeBot(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map(bot => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.name}</p>
            <button onClick={() => handleReleaseBot(bot)}>Release</button>
            <button onClick={() => handleDischargeBot(bot)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
