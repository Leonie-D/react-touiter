import React from 'react';
import {getTrendings} from '../api/TouitAPI';

class Trending extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "error" : null,
            "isLoaded" : false,
            "trendings" : []
        }
    }

    componentDidMount() {
        getTrendings(this.updateTrendings);
    }

    updateTrendings = (trendings) => {
        this.setState({
            "isLoaded" : true,
            "trendings" : trendings
        });
    }

    render() {
        const {trendings, isLoaded} = this.state;

        return (
            <div className="trendingsContainer">
                {isLoaded ? <ul>{trendings.map(t => <li key={t[0]}>{"#"+t[0]+"("+t[1]+")"}</li>)}</ul> : <p>Chargement...</p>}
            </div>
        )
    }
}

export default Trending;