import {
    ActionReducerMap, createSelector, createFeatureSelector,
    ActionReducer, combineReducers, Action, ActionReducerFactory, MetaReducer
} from '@ngrx/store';
import { ITeamModel } from '../models/TeamModel';
import * as formTeams from '../reducers/teams.reducer';
import { handleUndo } from 'ngrx-undo';

import { sessionStorageMiddleware, setReducersToStore, setExpiresAfter } from '../helpers';
export const metaReducers: MetaReducer<State>[] = [sessionStorageMiddleware, handleUndo];
export interface State {
    team: formTeams.State;
}
export const reducers: ActionReducerMap<State> = {
    team: formTeams.reducer
};
