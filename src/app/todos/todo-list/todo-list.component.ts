import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { filtersValids } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtersValids;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( ({todos, filter}) => {
      this.todos = todos;
      this.filtroActual = filter;
    });
  }

}
