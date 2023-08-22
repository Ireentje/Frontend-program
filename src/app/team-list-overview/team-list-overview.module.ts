import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListOverviewComponent } from './team-list-overview.component';
import { TeamListModule } from '../team-list/team-list.module';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TeamListOverviewComponent}
];

@NgModule({
  declarations: [TeamListOverviewComponent],
  imports: [
    CommonModule,
    TeamListModule
  ]
})
export class TeamListOverviewModule { }
