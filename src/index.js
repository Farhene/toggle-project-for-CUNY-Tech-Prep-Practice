import React from 'react';
import ReactDOM from 'react-dom';
import BoardSwitcher from './BoardSwitcher';
import './index.css';

ReactDOM.render(
  <BoardSwitcher numBoards={3} />,
  document.getElementById('root')
);
