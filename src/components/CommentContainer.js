import React from 'react';
import Comment from './Comment';

class CommentContainer extends React.Component {
    

    render() {
        const {comments} = this.props;

        return (
            <div className="comments-container">
                <h4>Commentaires</h4>
                <ul>
                    {comments.map(c => <Comment pseudo={c.pseudo} content={c.content} />)}
                </ul>
            </div>
        )
    }
}

export default CommentContainer;