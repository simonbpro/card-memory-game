import { Injectable } from '@angular/core';
import cardImages from '../../../assets/cardImages.json';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    // retrieves the image paths
    getImages(): any {
        return cardImages;
    }

    // shuffle the images present in the cards array randomly.   
    shuffleArray(array: any[]): any[] {
        for (var c = array.length - 1; c > 0; c--) {
            const r = Math.floor(Math.random() * c);

            const t = array[c];
            array[c] = array[r];
            array[r] = t;
        }
        return array;
    }

}