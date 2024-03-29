import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { HeaderTextService } from '../header-text.service';
import { MatchService } from './match/match.service';

@Component({
  selector: 'ov-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  @Input()
  matches: Match[] = [];
  filteredMatches: Match[] = [];
  constructor(private headerService: HeaderTextService, private matchService: MatchService) {
    this.headerService.setHeaderText('Matches Page');
  }
  ngOnInit() {
    this.loadEntities();
    // Load all players initially
     this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches;
      this.filteredMatches = [...this.matches];
    });
    // this.loadEntities();
  }

  loadEntities() {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data;
    });
  }
  onSearch(query: string) {
    // Handle search events
    if (query) {
      // Perform filtering based on the query
      this.filteredMatches = this.matches.filter((match) =>
        match.location.toLowerCase().includes(query.toLowerCase()) ||
        match.hometeam.toLowerCase().includes(query.toLowerCase()) ||
        match.awayteam.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      // If the query is empty, show all players
      this.filteredMatches = [...this.matches];
    }
  }
}
