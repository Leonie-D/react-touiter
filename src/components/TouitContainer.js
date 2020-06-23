import React from 'react';
import Touit from './Touit';

class TouitContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       "error" : null,
    //       "isLoaded" : false,
    //       "touits" : []
    //     };
    //   }
    
    //   updateTouits = (touits) => {
    //     this.setState({ 
    //       "touits" : touits,
    //       "isLoaded" : true
    //     });
    //   }
      
    //   componentDidMount() {
    //     getTouits(this.updateTouits);
    //   }

    render() {
        const {touits} = this.props;

        return (
            <div className="touitsContainer">
                <ul>
                    {touits.map(t => <Touit key={t.idtouit} pseudo={t.pseudo} message={t.message} {...t} />)}
                </ul>
            </div>
        )
    }
}

export default TouitContainer;