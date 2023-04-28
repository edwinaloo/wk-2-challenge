import React from 'react';
import { Switch, Route } from 'react-router-dom';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={BotCollection} />
      <Route exact path="/your-bot-army" component={YourBotArmy} />
    </Switch>
  );
}

export default Routes;
