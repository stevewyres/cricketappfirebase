import { ITeamModel } from './TeamModel';
import { IGamePlayer } from './GamePlayer';
import { EGameType } from '../enums/gameType.enum';

export interface IGameInfo {
    GameType: EGameType;
    TeamOne: ITeamModel;
    TeamTwo: ITeamModel;
    TeamOnePlayers: IGamePlayer[];
    TeamTwoPlayers: IGamePlayer[];
    RunsScored: number;
    Wickets: number;
    Extras: number;
    Overs: number;
}
