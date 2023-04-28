import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bot from './Bot';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bot data from the server
    const fetchBots = async () => {
      try {
        const response = await axios.get('http://localhost:8001/bots');
        setBots(response.data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchBots();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotCollection;

