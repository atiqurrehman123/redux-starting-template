import React from "react";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../src/reducer/index";

// components
import SongList from "./component/songList";

// set Store
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Song (with the help of redux)</h1>
        <SongList />
      </div>
    </Provider>
  );
}
export default App;
