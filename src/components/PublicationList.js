import React, { useContext } from 'react';
import { PublicationContext } from '../contexts/PublicationContext';
import PublicationDetail from './PublicationDetail';

const PublicationList = () => {
  const { publications } = useContext(PublicationContext);
  return publications.length ? ( 
      <div>
        {publications.map(publication => {
          return ( <PublicationDetail publication={publication} key={publication.id} />);
        }).reverse()}
      </div>  
    ) : (
      <div className='empty'>Il n'y a pas encore de commentaire pour cette publication.</div>
  );
}
 
export default PublicationList;