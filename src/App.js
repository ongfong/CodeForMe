import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Main from './Container/Main/Main';
import StickyFooter from './Components/StickyFooter/StickyFooter';
import About from './Components/About/About';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/about" exact component={About} />
          <Route path="/main" component={Main} />
          <Route path="/" exact component={StickyFooter} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
