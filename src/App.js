import React, { Component } from 'react';
import SearchResults  from './search/SearchResults'
import SearchBar  from './search/SearchBar'
import style from './search/AddOnResults/General.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchResultData: {},
      ClientID       : '' //NEED CLIENTID
    }
  }
  onUpdate(searchResultData) { this.setState({ searchResultData }) }

  render() {
    return (
      <div className="container" style={style}>
        <div className="App">
          <div className="container">
            <div className="jumbotron">
              <h1 className="text-center col-xs-12">
                   SOUNDCLOUD Search Bar App!
              </h1>
              <SearchBar updateActive={ this.onUpdate.bind(this) }
                         searchResultData={ this.state.searchResultData }
                         ClientID={ this.state.ClientID }
                    />
            </div>
            <div className="container">
              <SearchResults searchResultData={ this.state.searchResultData }
                             updateActive={this.onUpdate.bind(this)}
                             ClientID={ this.state.ClientID }
                    />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
