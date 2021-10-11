import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from '../models/counter.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter!: Counter

  // constructor(private store: Store<{counter: {counter: number}}>) { }
  constructor(private store: Store<AppState>) {
   store.select('counter').subscribe(
      res => {
        this.counter = res
      }
    )
  }

  ngOnInit(): void {
    
  }

}
