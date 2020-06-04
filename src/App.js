import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Main from './Container/Main/Main';
import StickyFooter from './Components/StickyFooter/StickyFooter';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Route path="/main" component={Main} />
          <Route path="/" exact component={StickyFooter} /> */}
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
