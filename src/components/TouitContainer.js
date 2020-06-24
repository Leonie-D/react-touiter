import React from 'react';
import Touit from './Touit';

class TouitContainer extends React.Component {

    render() {
        const {touits, updateTouits} = this.props;

        return (
            <div className="touitsContainer">
                <ul className="touit">
                    {touits.map(t => <Touit key={t.idtouit} idtouit={t.idtouit} pseudo={t.pseudo} message={t.message} nbLikes={t.nbLikes} nbComments={t.nbComments} updateTouits={updateTouits} {...t} />)}
                </ul>
            </div>
        )
    }
}

export default TouitContainer;