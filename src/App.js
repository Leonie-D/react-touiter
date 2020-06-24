import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './views/Home';
import SingleTouit from './views/SingleTouit';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <main>

              <Route exact path="/" component={Home}/>
              <Route path="/touit" component={SingleTouit} />

            </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
