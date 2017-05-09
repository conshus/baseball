const initialState = {
  count: { strikes: 0, balls: 0 },
  pitcherAttempt: '',
  outs: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'THROW_STRIKE':
      return { ...state, pitcherAttempt: 'THROW_STRIKE' }
    case 'THROW_BALL':
      return { ...state, pitcherAttempt: 'THROW_BALL' }
    case 'SWING_AND_HIT':
      return { ...initialState, outs: state.outs}
    case 'SWING_AND_MISS':
      if (state.count.strikes < 3){
        return { ...state, count: { ...state.count, strikes: state.count.strikes + 1 } }
      } else {
        if (state.outs < 2){
          return { ...initialState, outs: state.outs + 1}
        } else {
          return initialState
        }
      }
    case 'NO_SWING':
      let { count } = state;
      if (state.pitcherAttempt === 'THROW_STRIKE') {
        if (count.strikes < 3){
          return { ...state, count: { ...count, strikes: count.strikes + 1 } }
        } else {
          if (state.outs < 2){
            return { ...initialState, outs: state.outs + 1}
          } else {
            return initialState
          }
        }
      } else {
        if (count.balls < 3){
          return { ...state, count: { ...count, balls: count.balls + 1 }}
        } else {
          return { ...initialState, outs: state.outs}
        }
      }
    case 'BATTER_UP':
    if (state.outs < 2){
      return { ...initialState, outs: state.outs + 1}
    } else {
      return initialState
    }

    default:
      return state
  }
}
