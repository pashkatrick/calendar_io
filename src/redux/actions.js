import * as actions from "./actionTypes"

export function eventAdded (state=[],event) {
    return [...state, {
        type: actions.EVENT_ADDED,
        payload: {
            event
        }
    }]
}

export function userLogin (state=[],provider) {
    return [...state, {
        type: actions.PROVIDER_ADDED,
        payload: {
            provider
        }
    }]
}

export function userLogin (state=[],user) {
    return [...state, {
        type: actions.USER_LOGIN,
        payload: {
            user
        }
    }]
}

export function notificationAdded (notification) {
    return [...state, {
        type: actions.NOTIFICATION_ADDED,
        payload: {
            notification
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

export function timeAdded (state=[], time) {
    return [...state, {
        type: actions.TIME_ADDED,
        payload: {
            time
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