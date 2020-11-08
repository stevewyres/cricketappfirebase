import { Action } from '@ngrx/store';
import * as teamsActions from '../actions/teams.actions';
import { Observable } from 'rxjs';
import { ITeamModel } from '../models/TeamModel';
import { getSessionStorageReducerState } from '../helpers';
export interface State {
    teams: Observable<ITeamModel>;
}
const savedState: State = getSessionStorageReducerState('teams');

const initialState: State = {
    teams: null
};

export function reducer(state: State = initialState, action: teamsActions.Actions): State {
    switch (action.type) {
        case teamsActions.READ_TEAMS:
        return state;
    }
    return state;
}
