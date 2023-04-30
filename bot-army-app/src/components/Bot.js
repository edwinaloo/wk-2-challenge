// Bot.js
import React from 'react';

const Bot = ({
  bot,
  onAddToArmy,
  onReleaseFromArmy,
  onDischarge
}) => {
  const {
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
    avatar_url
  } = bot;

  const handleAddToArmy = () => {
    if (onAddToArmy) {
      onAddToArmy(bot);
    }
  };

  const handleReleaseFromArmy = () => {
    if (onReleaseFromArmy) {
      onReleaseFromArmy(bot);
    }
  };

  const handleDischarge = () => {
    if (onDischarge) {
      onDischarge(bot);
    }
  };

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>Class: {bot_class}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Catchphrase: {catchphrase}</p>
      {onAddToArmy && (
        <button onClick={handleAddToArmy}>Add to Army</button>
      )}
      {onReleaseFromArmy && (
        <button onClick={handleReleaseFromArmy}>Release from Army</button>
      )}
      {onDischarge && (
        <button onClick={handleDischarge} className="red-button">
          Discharge
        </button>
      )}
    </div>
  );
};

export default Bot;

