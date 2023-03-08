import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { App } from 'components/App';
import { store } from "./redux/store";
import './index.css';

import CursorTrail from "cursor-trails";
import sparkle from './img/star.png';
import magic from './img/magic.png';
import shine from './img/shine.png';

CursorTrail({
  container: document.body,
  images: [sparkle, magic, shine],
  rate: 0.5,
  size: 40,
  life: 1.5,
  speed: 1.2
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
