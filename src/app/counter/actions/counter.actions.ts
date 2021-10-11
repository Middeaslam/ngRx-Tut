import { Action } from '@ngrx/store';
import { Counter } from './../models/counter.model';

export enum CounterActiontypes {
    INCREMENT = '[COUNTER] Increment',
    DECREMENT = '[COUNTER] Decrement',
    RESET = '[COUNTER] Reset'
}


export class Increment implements Action {
    readonly type = CounterActiontypes.INCREMENT;
    // constructor(public payload: null) {}
}

export class Decrement implements Action {
    readonly type = CounterActiontypes.DECREMENT;
    // constructor(public payload: null) {}
}

export class Reset implements Action {
    readonly type = CounterActiontypes.RESET;
    // constructor(public payload: null) {}
}

export type CounterActions = Increment | Decrement | Reset