import { Component, Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ITeamModel } from '../models/TeamModel';
import { promiseCheck } from '../helpers/database.helper';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
// tslint:disable-next-line:component-class-suffix
export class FirebaseDatabasService {

  itemsTeams: AngularFireList<{}>;
  itemsList: Observable<ITeamModel[]>;
  team: ITeamModel;

  constructor(private db: AngularFireDatabase) {}

  getTeamList(): Observable<ITeamModel[]> {
    this.itemsTeams = this.db.list('/teams');

    this.itemsList =  this.itemsTeams.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })) as Observable<ITeamModel[]>;

    return this.itemsList;
  }

  getTeamItem(id: string) {

    //this.itemsTeams = this.db.list('/teams');

    this.itemsTeams = this.db.list('/teams');

    this.itemsList = this.getTeamList();

    this.itemsList.subscribe((data) => {
      this.renderTeam(data.filter(x => x.key === id)[0]);
      console.log('test3' + this.team.key);
    });
  }

  renderTeam(res: ITeamModel): void {
    console.log('test2' + res.key);
    this.team = res;
  }


  addITeamtem(newName: string) {
    promiseCheck(this.itemsTeams.push({ Name: newName }), 'addItem');
  }
  deleteTeamItem(key: string) {
    console.log(key);
    promiseCheck(this.itemsTeams.remove(key), 'deleteItem');
  }

  deleteTeamEverything() {
    promiseCheck(this.itemsTeams.remove(), 'deleteEverything');
  }

  updateTeamItem(key: string, newField: string) {
    promiseCheck(this.itemsTeams.update(key, { Name: newField }), 'updateItem');
  }
}
