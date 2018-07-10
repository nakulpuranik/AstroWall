import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { RootStack } from './navigation';
import reducer from './redux/reducer';
import { Root } from 'native-base';

class App extends Component {
  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
        <Root>
          <RootStack />
        </Root>
      </Provider>
    );
  }
}

export default App;
