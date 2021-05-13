import { createAction, props } from '@ngrx/store';

export type filtersValids = 'all' | 'active' | 'completed';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props <{filter: filtersValids}>()
);

