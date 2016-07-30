import React from 'react';

import Editor from './Editor.jsx';
import Greed from './Greed.jsx';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1> Notes App</h1>
                <Editor onNoteAdd={this.handleNoteAdd} />

            </div>
        )
    }
}

export default App;


// <Greed notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>