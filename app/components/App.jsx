import React from 'react';

import Editor from './Editor.jsx';
import Greed from './Greed.jsx';

class App extends React.Component {

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
