import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';
import { filtersValids } from './filter.actions';

export const initialState: filtersValids = 'all';

const _filterReducer = createReducer<filtersValids, Action>(
  initialState,
  on(actions.setFilter, (state, {filter}) => filter),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
