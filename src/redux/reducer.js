import * as actions from './actionTypes'

let lastId=0;

export function reducer (state=[], action) {
    
    switch (action.type) {
        case actions.EVENT_ADDED: return {...state, event: action.payload.event}; break;
        case actions.TIME_ADDED: return {...state, time: action.payload.time}; break;
        case actions.USER_LOGIN: return {...state, user: action.payload.user}; break;
        case actions.PROVIDER_ADDED: return {...state, provider: action.payload.provider}; break;
        case actions.DATE_ADDED: return {...state, chosenDate: action.payload.date, week: action.payload.week}; break;
        default : return state;
    }
}
    
  