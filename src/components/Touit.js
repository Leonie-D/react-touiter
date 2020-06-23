import React from 'react';

class Touit extends React.Component {
    render() {
        const {pseudo, message} = this.props;

        return (
            <li>
                <strong>{pseudo}</strong>
                <p>{message}</p>
            </li>
        )
    }
}

export default Touit;