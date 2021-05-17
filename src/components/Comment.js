import React, { useContext } from 'react';
import { CommentContext } from '../contexts/CommentContext';

const Comment = ({ comment }) => {
  const { dispatch } = useContext(CommentContext);
  return ( 
    <li>
      <div className="pseudo">{comment.pseudo}</div>
      <div className="comment">{comment.comment}</div>
      <div className="remove-comment" onClick={() => dispatch({type: 'REMOVE_PUBLICATION', id: comment.id})}></div>
    </li>
   );
}
 
export default Comment;