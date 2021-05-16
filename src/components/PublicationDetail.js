import React, { useContext } from 'react';
import { PublicationContext } from '../contexts/PublicationContext';

const PublicationDetail = ({ publication }) => {
  const { dispatch } = useContext(PublicationContext);
  return ( 
    <li onClick={() => dispatch({type: 'REMOVE_PUBLICATION', id: publication.id})}>
      <div className="pseudo">{publication.pseudo}</div>
      <div className="comment">{publication.comment}</div>
    </li>
   );
}
 
export default PublicationDetail;