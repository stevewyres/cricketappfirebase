import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './admin/teams.component';
import { TeamComponent } from './admin/team.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'editteams', component: TeamsComponent},
    { path: 'editteam/:id', component: TeamComponent },
    { path: 'editteam', component: TeamComponent },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
