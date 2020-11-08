import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ITeamModel } from '../models/TeamModel';
import { FirebaseDatabasService } from '../services/firebase-db.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnDestroy {

  subscription: Subscription;
  title = 'Team Admin';
  description = 'Update the cricket teams in this page';
  itemsList: Observable<ITeamModel[]>;

  constructor(private fireBaseService: FirebaseDatabasService) {
    this.itemsList = fireBaseService.getTeamList();
   // this.subscription = this.itemsList.subscribe(res => console.log(res));
  }

  addItem(newName: string) {
    this.fireBaseService.addITeamtem(newName);
  }
  deleteItem(key: string) {
    this.fireBaseService.deleteTeamItem(key);
  }
  deleteEverything() {
    this.fireBaseService.deleteTeamEverything();
  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
   }
}
