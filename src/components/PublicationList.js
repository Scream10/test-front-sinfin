import React, { useContext } from 'react';
import { PublicationContext } from '../contexts/PublicationContext';
import PublicationDetail from './PublicationDetail';

const PublicationList = () => {
  const { publications } = useContext(PublicationContext);
  return publications.length ? ( 
      <div className="publication-list">
        <ul>
          {publications.map(publication => {
            return ( <PublicationDetail publication={publication} key={publication.id} />);
          }).reverse()}
        </ul>
      </div>  
    ) : (
      <div className='empty'>Il n'y a pas encore de commentaire pour cette publication.</div>
  );
}
 
export default PublicationList;