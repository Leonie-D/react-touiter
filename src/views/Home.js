import React, { Component } from 'react';
import SendMessageForm from '../components/SendMessageForm';
import TouitContainer from '../components/TouitContainer';
import Trending from '../components/Trending';
import {getTouits, getTrendings} from '../api/TouitAPI';

class Home extends Component {
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
        const intervalId = setInterval(() => {
            getTouits(this.updateTouits);
            getTrendings(this.updateTrendings);
        }, 5000);
        this.setState({"intervalId": intervalId});
    }

    componentWillMount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        const {touits, touitIsLoaded, trendings, trendingIsLoaded} = this.state;

        return (
            <div>
                <SendMessageForm updateTouits={this.updateTouits} updateTrendings={this.updateTrendings} />

                {touitIsLoaded ? <TouitContainer touits={touits} /> : <p>Chargement...</p>}

                {trendingIsLoaded ? <Trending trendings={trendings} /> : <p>Chargement...</p>}
            </div>
        );
    }
}

export default Home;