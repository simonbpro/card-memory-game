
/**
 * needed to store the properties of the card.
 * store the image IDs, check whether the card is flipped.
 * store the card match state.
 */
export interface CardModel {
    imageId: string;
    isFlipped: boolean;
    isMatched: boolean;
}
