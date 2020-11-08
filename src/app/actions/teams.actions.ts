import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITeamModel } from '../models/TeamModel';

export const READ_TEAMS = '[Teams] Read';

export class ReadTeams implements Action { readonly type = READ_TEAMS; constructor(public payload: Observable<ITeamModel>) { } }

export type Actions = ReadTeams;
