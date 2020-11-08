import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { promiseCheck } from '../helpers/database.helper';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Location } from '@angular/common';
import { Key } from 'selenium-webdriver';
import { ITeamModel } from '../models/TeamModel';
import { map } from 'rxjs/operators';
import { FirebaseDatabasService } from '../services/firebase-db.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})

export class TeamComponent {
  title = 'Add Team';
  buttonSubmiText = 'Add';
  itemsList: Observable<ITeamModel[]>;
  id: string;
  editMode: boolean;
  teamForm: FormGroup;

  teamName: string;
  constructor(private router: Router, private fireBaseService: FirebaseDatabasService,
    private route: ActivatedRoute) {
      this.setupForm();
      route.params.subscribe(params => { this.id = params['id']; this.setSingleTeam(); });
  }

  setSingleTeam() {
    if (this.id) {
      this.itemsList = this.fireBaseService.getTeamList();

      this.itemsList.subscribe((data) => {
        this.renderTeam(data.filter(x => x.key === this.id)[0]);
      });

      this.title = 'Edit Team';
      this.buttonSubmiText = 'Update';
      this.editMode = true;
    } else {
      this.title = 'Add Team';
      this.buttonSubmiText = 'Add';
    }

  }

  setupForm() {
    this.teamForm = new FormGroup({
      'teamName': new FormControl(this.teamName, Validators.required)
    });

  }
  renderTeam(res: ITeamModel): void {
    this.teamName = res.Name;
    this.setupForm();
  }

  onSubmit() {
    if (this.editMode) {
      this.fireBaseService.updateTeamItem(this.id, this.teamForm.value.teamName);
    } else {
      this.fireBaseService.addITeamtem(this.teamForm.value.teamName);
    }
    this.router.navigate(['editteams']);
  }

  onCancel() {
    this.router.navigate(['editteams']);
  }
}
