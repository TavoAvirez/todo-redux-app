import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtersValids = 'all';
  filters: actions.filtersValids[] = ['all', 'completed', 'active']

  itemsLeft = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filtroActual = state.filter;
      this.itemsLeft = state.todos.filter( todo => !todo.complete).length;
    });
  }

  changeFilter(filter: actions.filtersValids) {
    this.store.dispatch(actions.setFilter({filter}));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }

}
