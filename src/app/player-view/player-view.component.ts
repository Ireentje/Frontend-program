import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Player } from '../shared/player';

@Component({
  selector: 'ov-player-view',
  templateUrl: 'player-view.component.html',
  styleUrls: ['player-view.component.scss']
})
export class PlayerViewComponent implements OnDestroy {
  @Input() player: Player;
  private subscription: Subscription;

  constructor(private headerService: HeaderTextService) {
    this.headerService.setHeaderText('Player page'); // Set header text in constructor
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}