export enum CardColor {
  eichel = 'Eichel',
  schelln = 'Schelln',
  gras = 'Gras',
  herz = 'Herz'
}

export enum Highness {
  seven = 'Sieben',
  eight = 'Acht',
  nine = 'Neun',
  ten = 'Zehn',
  unter = 'Unter',
  ober = 'Ober',
  koenig = 'König',
  ass = 'Ass'
}

export abstract class CardFactory {
  static readonly colors: CardColor[] = [CardColor.eichel, CardColor.gras, CardColor.herz, CardColor.schelln];
  static readonly highness = [Highness.seven, Highness.eight, Highness.nine, Highness.ten, Highness.unter, Highness.ober, Highness.koenig, Highness.ass];

  static getDeck(): Card[] {
    const deck: Card[] = [];

    CardFactory.colors.forEach(color => {
      CardFactory.highness.forEach(highness => {
        deck.push({
          color: color,
          iconPath: this.getIconPathByColor(color),
          trumpColor: color === CardColor.herz,
          highness: highness,
          weight: this.getWeightByHighness(highness),
        })
      });
    });

    return deck;
  }

  static shuffle(deck: Card[]) {
    let currentIndex = deck.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
    return deck;
  }

  private static getIconPathByColor(color: CardColor): string {
    return `/assets/Bay_${color.toLocaleLowerCase()}`;
  }

  private static getWeightByHighness(highness: Highness): number {
    switch (highness) {
      case Highness.seven:
      case Highness.eight:
      case Highness.nine:
        return 0;
      case Highness.ten:
        return 10;
      case Highness.unter:
        return 2;
      case Highness.ober:
        return 3;
      case Highness.koenig:
        return 4;
      case Highness.ass:
        return 11;
    }
  }

}

export interface Card {
  color: CardColor;
  iconPath: string;
  highness: Highness;
  trumpColor: boolean;
  weight: number;
}
