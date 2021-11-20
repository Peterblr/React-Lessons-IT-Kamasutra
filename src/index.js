import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/storeRedux";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
