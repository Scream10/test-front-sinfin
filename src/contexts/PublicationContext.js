import React, { createContext, useReducer, useEffect } from 'react';
import { publicationReducer } from '../reducers/PublicationReducer';

export const PublicationContext = createContext();

const PublicationContextProvider = (props) => {
  const [publications, dispatch] = useReducer(publicationReducer, [], () => {
    const localData = localStorage.getItem('publications');
    // If there is new data it should parse it, if not it's an empty array
    return localData ? JSON.parse(localData) : []
  });
  useEffect(() => {
    localStorage.setItem('publications', JSON.stringify(publications));
  }, [publications])

  return(
    <PublicationContext.Provider value={{publications, dispatch}}>
      {props.children}
    </PublicationContext.Provider>
  )
}

export default PublicationContextProvider;