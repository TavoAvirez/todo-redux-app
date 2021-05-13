import { createAction, props } from '@ngrx/store';

export enum TodoActions {
  Create = '[TODO] Create',
  Toggle = '[TODO] Toggle',
  ToggleAll = '[TODO] ToggleAll',
  Edit = '[TODO] Edit',
  Delete = '[TODO] Delete',
  ClearCompleted = '[TODO] ClearCompleted'
}

export const createTodo = createAction(
  TodoActions.Create,
  props<{text: string}>()
);
export const toggle = createAction(
  TodoActions.Toggle,
  props<{id: number}>()
);
export const toggleAll = createAction(
  TodoActions.ToggleAll,
  props<{complete: boolean}>()
);
export const editTodo = createAction(
  TodoActions.Edit,
  props<{id: number, text: string}>()
);
export const deleteTodo = createAction(
  TodoActions.Delete,
  props<{id: number}>()
);
export const clearCompleted = createAction(
  TodoActions.ClearCompleted,
);

