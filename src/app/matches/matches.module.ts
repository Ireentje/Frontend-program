import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchComponent } from './match/match.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './shared/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatchFilterPipe } from './shared/search/match-filter.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MatchesComponent}
];

@NgModule({
  declarations: [MatchesComponent, MatchComponent, SearchComponent, MatchFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports:[MatchesComponent, MatchComponent, SearchComponent, MatchFilterPipe]
})
export class MatchesModule { }
