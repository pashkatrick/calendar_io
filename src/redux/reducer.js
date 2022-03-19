import * as actions from './actionTypes'

let lastId=0;

export function reducer (state=[], action) {
    
    switch (action.type) {
        case actions.EVENT_ADDED: return [
            ...state, {
                id:++lastId,
                event: action.payload.event
        }
        ]; break;
        case actions.DATE_ADDED: return {chosenDate:action.payload.date}; break;
        default : return state;
    }
}
    
  