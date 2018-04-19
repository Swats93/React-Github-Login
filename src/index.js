import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './pages/Landing';

const Routes = () => (
  <Router>
  	<Provider store={store}>
	  	<div>
		    <Route exact path='/' component={Landing}/>
	    </div>
    </Provider>
  </Router>
);

render(<Routes/>, document.getElementById('root'));