import { v1 as uuidv1 } from 'uuid';

// 1° here state is used to represent all comments
// 2° All the logic are in this file, and that makes the application more maintainable 
export const CommentReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PUBLICATION':
      return [...state, {
        pseudo: action.comment.pseudo,
        comment: action.comment.comment,
        publicationId: action.comment.publicationId,
        timestamp: Date.now(),
        id: uuidv1()
      }]
    case 'REMOVE_PUBLICATION':
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
} 

