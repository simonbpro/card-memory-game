import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardService } from '../../core/services/card.service';
import { Card } from "../card/card";
import { CardModel } from '../../models/card.model';
import { TimeOver } from '../../dialogs/time-over/time-over';
import { GameComplete } from '../../dialogs/game-complete/game-complete';

@Component({
  selector: 'app-setup',
  imports: [Card],
  templateUrl: './setup.html',
  styleUrl: './setup.css',
})
export class Setup implements OnInit {

  cardService: CardService = inject(CardService);
  // empty array to store cards
  cards: CardModel[] = [];

  openCards: Array<number> = [];

  pairsMatched = 0;

  //Initialize a counter with 40 seconds. timer functionality decides the win or loss condition
  timeLeft = 40;

  interval: any;


  constructor(private _dialog: MatDialog, private _router: Router) {

  }

  closeDialog() {
    this._dialog.closeAll();
  }

  ngOnInit(): void {
    this.createCardBoard();
  }


  /**
   * fetch images data using CardService and push two copies of every fetched image into 
   * the cards array.
   * 
   */
  createCardBoard(): void {
    let cardImages = this.cardService.getImages()
    this.cards = [...structuredClone(cardImages), ...structuredClone(cardImages)];
    this.cards = this.cardService.shuffleArray(this.cards);
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this._dialog.open(TimeOver, {
          disableClose: false,
        }).afterClosed().subscribe(() => {
          this.timeLeft = 40;
          this.restart()
        });
      }
    }, 1000);
  }

  handleCardClick(index: number): void {
    const cardClicked = this.cards[index];

    if (cardClicked.isFlipped === false && this.openCards.length < 2) {
      cardClicked.isFlipped = true;
      this.openCards.push(index);
      if (this.openCards.length > 1) {

        setTimeout(() => {
          if (this.checkForCardMatch(this.openCards[0], this.openCards[1]) === true) {
            this.pairsMatched++;

            if (this.checkForGameCompletion(this.pairsMatched) === true) {
              clearInterval(this.interval);
              this._dialog.open(GameComplete, {
                disableClose: true,
              }).afterClosed().subscribe(() => {
                this.restart()
              });
            }
          }
          this.openCards = [];
        }, 1000);
      }
    } else if (cardClicked.isFlipped === true) {
      cardClicked.isFlipped = false;
      this.openCards.pop();
    }
  }


  // Check for Game Completion
  checkForGameCompletion(matchedPairsCount: number): boolean {
    return matchedPairsCount === this.cardService.getImages().length ? true : false
  }

  /**
   * Check for Card Matches
   * @param choiceOne indices of the two flipped cards.
   * @param choiceTwo 
   * @returns the updated value of the isMatched property of a card.
   */
  checkForCardMatch(choiceOne: number, choiceTwo: number): boolean {
    if (this.cards[choiceOne].imageId === this.cards[choiceTwo].imageId) {
      this.cards[choiceOne].isMatched = true
      this.cards[choiceTwo].isMatched = true
    }
    else {
      this.cards[choiceOne].isFlipped = this.cards[choiceTwo].isFlipped = false
    }
    return this.cards[choiceOne].isMatched
  }

  restart(): void {
    this.pairsMatched = 0;
    this.timeLeft = 40;
    this.createCardBoard();
  }

}
