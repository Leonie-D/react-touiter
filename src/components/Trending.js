import React from 'react';

class Trending extends React.Component {

    render() {
        const {trendings} = this.props;

        return (
            <div className="trendingsContainer">
                <ul>{trendings.map(t => <li key={t[0]}>{"#"+t[0]+"("+t[1]+")"}</li>)}</ul>
            </div>
        )
    }
}

export default Trending;