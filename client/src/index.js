import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './scenes/Landing';
import Project from './scenes/Project';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => (
  <div className="App">
    <Provider store={createStore}>
      <Router>
        <div className="App-body">
          <Route exact path='/' component={Landing} />
          <Route exact path='/:project' component={Project} />
        </div>
      </Router>
    </Provider>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
