import * as actions from "./actionTypes"
import { EVENT_ADDED } from "./actionTypes"

export function eventAdded (event) {
    return [...state, {
        type: actions.EVENT_ADDED,
        payload: {
            event
          }
    }]
}

export function dateAdded (state=[],date) {
    return [...state, {
        type: actions.DATE_ADDED,
        payload: {
            date
          }
    }]
}

export function userLogin (state=[], user) {
    return [...state, {
        type: actions.USER_LOGIN,
        payload: {
            user
          }
    }]
}