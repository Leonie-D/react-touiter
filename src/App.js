import React from 'react';
import Header from './components/Header';
import SendMessageForm from './components/SendMessageForm';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';
import {getTouits, getTrendings} from './api/TouitAPI';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "error" : null,
      "touitIsLoaded" : false,
      "touits" : [],
      "trendingIsLoaded" : false,
      "trendings" : []
    };
  }

  updateTouits = (touits) => {
    this.setState({ 
      "touits" : touits,
      "touitIsLoaded" : true
    });
  }

  updateTrendings = (trendings) => {
    this.setState({
        "trendingIsLoaded" : true,
        "trendings" : trendings
    });
}
  
  componentDidMount() {
    getTouits(this.updateTouits);
    getTrendings(this.updateTrendings);
  }

  render() {
    const {touits, touitIsLoaded, trendings, trendingIsLoaded} = this.state;
    
    return (
      <div className="App">
          <Header />
          <main>

            <SendMessageForm updateTouits={this.updateTouits} updateTrendings={this.updateTrendings} />

            {touitIsLoaded ? <TouitContainer touits={touits} /> : <p>Chargement...</p>}

            {trendingIsLoaded ? <Trending trendings={trendings} /> : <p>Chargement...</p>}

          </main>
      </div>
    );
  }
}

export default App;
