import React, { useState, useEffect } from 'react';

const BotCollection = ({ addToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const handleAddToArmy = (bot) => {
    addToArmy(bot);
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id} onClick={() => handleAddToArmy(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;



