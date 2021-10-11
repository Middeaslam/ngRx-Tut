import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
// import { decrement, increment, reset } from '../state/counter.actions';
import * as CounterActions from "../actions/counter.actions";

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(new CounterActions.Increment())
  }

  onDecrement() {
    this.store.dispatch(new CounterActions.Decrement())
  }

  onReset() { 
    this.store.dispatch(new CounterActions.Reset())
  }

}
