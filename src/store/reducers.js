import _ from 'lodash'

export function ui(state = {view: 'courses'}, action) {
    switch (action.type) {
        case 'SET_VIEW':
            return _.assign({}, {view: action.payload})
        default:
            return state
    }
}

export function students(state ={}, action) {
    switch (action.type) {
        case 'LOAD_STUDENTS':
            return _.assign(state, action.payload)
        case 'ADD_STUDENT':
            return _.assign(state, {[`student${action.payload.id}`]: action.payload})
        case 'UPDATE_STUDENT':
            return _.assign(state, {[`student${action.payload.id}`]: action.payload})
        case 'DELETE_STUDENT':
            return _.omit(state, [`student${action.payload}`])
        
        default:
            return state
    }
}

export function courses(state ={}, action) {
    switch (action.type) {
        case 'LOAD_COURSES':
            return _.assign(state, action.payload)
        default:
            return state
    }
}