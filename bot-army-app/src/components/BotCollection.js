// BotCollection.js
import React, { useEffect, useState } from 'react';
import Bot from './Bot';

const BotCollection = ({ onAddToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('http://localhost:3000/bots');
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.log('Error fetching bots:', error);
      }
    };

    fetchBots();
  }, []);

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <Bot bot={bot} onAddToArmy={onAddToArmy} />
        </div>
      ))}
    </div>
  );
};

export default BotCollection;

