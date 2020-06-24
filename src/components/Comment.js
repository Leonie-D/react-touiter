import React from 'react';

class Comment extends React.Component {
    

    render() {
        const {pseudo, content} = this.props;

        return (
            <li>
                <strong>{pseudo}</strong>
                <p>{content}</p>
            </li>
        )
    }
}

export default Comment;