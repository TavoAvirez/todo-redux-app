import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Todo1'),
  new Todo('Todo2'),
  new Todo('Todo3'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.deleteTodo, (state, {id}) => state.filter( todo => todo.id !== id )),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        };
      } else {
        return todo;
      }
    });
  }),

  on(actions.toggleAll, (state, {complete}) => {
    return state.map( todo => {
      return {
        ...todo,
        complete
      };
    });
  }),

  on(actions.editTodo, (state, { id, text }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        };
      } else {
        return todo;
      }
    });
  }),

   on(actions.clearCompleted, (state) => state.filter(todo => {
    return !todo.complete;
    }))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
