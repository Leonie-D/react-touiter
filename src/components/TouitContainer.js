import React from 'react';
import Touit from './Touit';

class TouitContainer extends React.Component {

    render() {
        const {touits} = this.props;

        return (
            <div className="touitsContainer">
                <ul>
                    {touits.map(t => <Touit key={t.idtouit} pseudo={t.pseudo} message={t.message} nbLikes={t.nbLikes} nbComments={t.nbComments} {...t} />)}
                </ul>
            </div>
        )
    }
}

export default TouitContainer;