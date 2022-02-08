import { Card, CardFactory } from "./cards";

describe('CardFactory', () => {
  let deck: Card[];

  beforeEach(() => {
    deck = CardFactory.getDeck();
  });

  it('should create the deck', () => {
    expect(deck.length).toBe(32);
  });

  it('should create 8 of each color', () => {
    CardFactory.colors.forEach(color =>
      expect(deck.filter(card => card.color === color).length).toBe(8));
  });

  it('should know all colors', () => {
    expect(CardFactory.colors.length).toBe(4);
  });

  it('should create 4 of each highness', () => {
    CardFactory.highness.forEach(highness =>
      expect(deck.filter(card => card.highness === highness).length).toBe(4));
  });

  it('should know all highness', () => {
    expect(CardFactory.highness.length).toBe(8);
  });
});
