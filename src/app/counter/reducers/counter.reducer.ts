import { Action } from "@ngrx/store";
import { CounterActions, CounterActiontypes } from "../actions/counter.actions";
import { Counter } from "../models/counter.model";

const initialState: Counter = {
    counter: 0
}


export function counterReducer (state: Counter = initialState, action : Action) {
    const counterAction = action as CounterActions
    switch(counterAction.type) {
        case CounterActiontypes.INCREMENT:
            return {...state, counter: state.counter + 1}
        case CounterActiontypes.DECREMENT:
            return {...state, counter: state.counter -1}
        case CounterActiontypes.RESET:
            return { ...state, counter : 0}
        default:
            return state
    }
}