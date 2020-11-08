import { EPlayerType } from '../enums/playerType.enum';
import { ERating } from '../enums/rating.enum';
export interface IPlayerModel {
    Key: string;
    TeamKey: string;
    FirstName: string;
    Surname: string;
    Type: EPlayerType;
    Rating: ERating;
}
