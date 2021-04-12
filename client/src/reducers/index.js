import {
  ADD_QUOTE,
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  GET_EPISODES,
  EMPTY_CHARACTER_DETAIL,
  GET_EPISODE_DETAIL,
  EMPTY_EPISODE_DETAIL,
} from "../actions";

//==== Setear Estado Global Inicial ======//

const initialState = {
  quote: {},
  characters: [],
  characterDetail: {},
  episodes: [],
  episodeDetail: {},
  loading: true,
};

//==== Setear Reducers ======//
function rootReducer(state = initialState, action) {
  // action --> { type:  ADD_QUOTE, data: lo que llega del back}
  console.log(action);
  if (action.type === ADD_QUOTE) {
    return {
      ...state,
      quote: action.payload,
      loading: false,
    };
  }
  if (action.type === GET_CHARACTERS) {
    return {
      ...state,
      characters: action.payload,
    };
  }
  if (action.type === GET_CHARACTER_DETAIL) {
    return {
      ...state,
      characterDetail: action.payload,
    };
  }
  if (action.type === EMPTY_CHARACTER_DETAIL) {
    return {
      ...state,
      characterDetail: {},
    };
  }
  if (action.type === GET_EPISODES) {
    return {
      ...state,
      episodes: action.payload,
    };
  }
  if (action.type === GET_EPISODE_DETAIL) {
    return {
      ...state,
      episodeDetail: action.payload,
    };
  }
  if (action.type === EMPTY_EPISODE_DETAIL) {
    return {
      ...state,
      episodeDetail: {},
    };
  }
  return state;
}

export default rootReducer;
