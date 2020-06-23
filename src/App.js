import React from 'react';
import Header from './components/Header';
import SendMessageForm from './components/SendMessageForm';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';
import {getTouits} from './api/TouitAPI';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "error" : null,
      "isLoaded" : false,
      "touits" : []
    };
  }

  updateTouits = (touits) => {
    this.setState({ 
      "touits" : touits,
      "isLoaded" : true
    });
  }
  
  componentDidMount() {
    getTouits(this.updateTouits);
  }

  render() {
    const {touits, isLoaded} = this.state;
    
    return (
      <div className="App">
          <Header />
          <main>

            <SendMessageForm updateTouits={this.updateTouits}/>

            {isLoaded ? <TouitContainer touits={touits}/> : <p>Chargement...</p>}

            <Trending />

          </main>
      </div>
    );
  }
}

export default App;
