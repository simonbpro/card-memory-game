import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {

  @Input() cardModel!: CardModel;

  // Use @Output to decorate an event cardClicked of the type EventEmitter.
  @Output() cardClicked = new EventEmitter();


  ngOnInit(): void {

  }

  /**
   * Task 10 CardComponent will handle the logic and layout for a single card, treat it as a 
   * child component that will receive data from the parent component i.e., SetupComponent. 
   * We also need CardComponent to emit the click event to notify the parent component of changes.
   */
  // function to emit event using the cardClicked property.
  handleClick(): void {
    this.cardClicked.emit();
  }

}
