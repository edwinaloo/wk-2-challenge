import React from "react";
import YourBotArmy from "./YourBotArmy";

function Bot({ bot, onAddToArmy }) {
  const handleAddToArmy = () => {
    onAddToArmy(bot);
  };

  // Placeholder values or functions
  const yourArmyArray = []; // Replace with the actual array containing the bots in your army
  const handleReleaseFromArmy = (bot) => {
    // Handle release logic
  };
  const handleDischarge = (bot) => {
    // Handle discharge logic
  };

  return (
    <div>
      <h3>{bot.name}</h3>
      {/* Other bot details */}
      <button onClick={handleAddToArmy}>Add to Army</button>

      {/* Render the YourBotArmy component */}
      <YourBotArmy
        army={yourArmyArray}
        onReleaseFromArmy={handleReleaseFromArmy}
        onDischarge={handleDischarge}
      />
    </div>
  );
}

export default Bot;

