import { v1 as uuidv1 } from 'uuid';

// 1° here state is used to represent all comments
// 2° All the logic are in this file, and that makes the application more maintainable 
export const publicationReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PUBLICATION':
      return [...state, {
        pseudo: action.publication.pseudo,
        comment: action.publication.comment,
        timestamp: Date.now(),
        id: uuidv1()
      }]
    case 'REMOVE_PUBLICATION':
      return state.filter(publication => publication.id !== action.id)
    default:
      return state
  }
} 

