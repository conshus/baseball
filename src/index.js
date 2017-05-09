import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//import { render } from 'react-dom';
//import { Provider } from 'react-redux';
import App from './App';
import plays from './reducers'
import './index.css';

const store = createStore(plays)
window.store = store;

const render = () => ReactDOM.render(
  <App
    state={store.getState()}
    throwStrike={() => store.dispatch({ type: 'THROW_STRIKE' })}
    throwBall={() => store.dispatch({ type: 'THROW_BALL' })}
    swingAndHit={() => store.dispatch({ type: 'SWING_AND_HIT' })}
    swingAndMiss={() => store.dispatch({ type: 'SWING_AND_MISS' })}
    noSwing={() => store.dispatch({ type: 'NO_SWING' })}
    batterUp={() => store.dispatch({ type: 'BATTER_UP' })}

  />,
  document.getElementById('root')
);
render()
store.subscribe(render)

//Could not get alternate method working
// render(
//   <Provider store={store}>
//     <App
//       throwStrike={() => store.dispatch({ type: 'THROW_STRIKE' })}
//       throwBall={() => store.dispatch({ type: 'THROW_BALL' })}
//       swingAndHit={() => store.dispatch({ type: 'SWING_AND_HIT' })}
//       swingAndMiss={() => store.dispatch({ type: 'SWING_AND_MISS' })}
//       noSwing={() => store.dispatch({ type: 'NO_SWING' })}
//
//     />,
//   </Provider>,
//   document.getElementById('root')
// )
