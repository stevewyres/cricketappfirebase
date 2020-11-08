import { IPlayerModel } from './PlayerModel';
import { IBattingStats } from './BattingStats';
import { IBowlingStats } from './BowlingStats';
import { IFieldingStats } from './FieldingStats';

export interface IGamePlayer {
    PlayerInfo: IPlayerModel;
    BattingStats: IBattingStats;
    BowlingStats: IBowlingStats;
    FieldStats: IFieldingStats;
    HowOutColumn1: string;
    HowOutColumn2: string;
}
