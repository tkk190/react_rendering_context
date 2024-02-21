import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from "./Parent";
import ParentContext from "./ParentContext";

function App() {
    return (
        <ParentContext>
            <input />
        </ParentContext>
  );
}

export default App;
