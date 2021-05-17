import React, { createContext, useReducer, useEffect } from 'react';
import { CommentReducer } from '../reducers/CommentReducer';

export const CommentContext = createContext();

const CommentContextProvider = (props) => {
  const [comments, dispatch] = useReducer(CommentReducer, [], () => {
    const localData = localStorage.getItem('comments');
    // If there is new data it should parse it, if not it's an empty array
    return localData ? JSON.parse(localData) : []
  });
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments])

  return(
    <CommentContext.Provider value={{comments, dispatch}}>
      {props.children}
    </CommentContext.Provider>
  )
}

export default CommentContextProvider;