import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MyBoards from './components/MyBoards';
import NewBoard from './components/NewBoard';

class App extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <Route path="/myboards" component={MyBoards}/>
          <Route path="/newboard" component={NewBoard}/>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
