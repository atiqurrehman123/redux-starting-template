import { ADD_SONG } from "../actions/types";
const initialState = {
  songs: [
    { title: "I love redux", editing: false },
    { title: "The redux song", editing: false },
    { title: "Run to the redux hill", editing: false },
  ],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SONG:
      return {
        songs: [action.payload, ...state.songs],
      };

    default:
      return state;
  }
}
