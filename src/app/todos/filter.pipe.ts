import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtersValids } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter?: filtersValids): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.complete);
      case 'active':
        return todos.filter(todo => !todo.complete);
      default:
        return todos;
    }

  }

}
