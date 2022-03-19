import * as actions from "./actionTypes"
import { EVENT_ADDED } from "./actionTypes"

export function eventAdded (description) {
    return {
        type: actions.EVENT_ADDED,
        payload: {
            description
        }
    }
}

export function dateAdded (state=[], event) {
    return [...state, {
        type: actions.DATE_ADDED,
        payload: {
            event
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