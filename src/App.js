// client/src/App.js

import React from 'react';
import Header from './components/Header';
import StreamList from './components/StreamList';

function App() {
    return (
        <div className="App">
            <Header />
            <StreamList />
        </div>
    );
}

export default App;