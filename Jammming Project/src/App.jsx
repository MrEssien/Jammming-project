import React from 'react';
import './App.css';
import {Searchtab} from '.../Searchtab';
import {SearchList} from '../SearchList';
import {Playlist} from '../Playlist';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1><span className="highlight">Jammmming</span></h1>
        <div className="App">
          {/* <!-- Add a SearchTab component --> */}
          <div className="App-playlist">
            {/* <!-- Add a SearchList component --> */}
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
    );
  }

}

export default App;