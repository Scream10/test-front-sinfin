import React, { useContext } from 'react';
import { PublicationContext } from '../contexts/PublicationContext';

const PublicationDetail = ({ publication }) => {
  const { dispatch } = useContext(PublicationContext);
  return ( 
    <li>
      <div className="pseudo">{publication.pseudo}</div>
      <div className="comment">{publication.comment}</div>
      <div className="remove-publication" onClick={() => dispatch({type: 'REMOVE_PUBLICATION', id: publication.id})}></div>
    </li>
   );
}
 
export default PublicationDetail;