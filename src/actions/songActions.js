import { ADD_SONG } from "./types";
export const addSong = (song) => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};
