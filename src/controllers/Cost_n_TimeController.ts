import { iLanguage } from "../interfaces/iLanguage";

export class Cost_n_TimeController {
  private lang: iLanguage;

  constructor(costBySymbol: number, minimalCost: number, editSpeed: number) {
    this.lang = {
      minimal: minimalCost,
      bySymbol: costBySymbol,
      speed: editSpeed,
    };
  }

  calculateCost(count: number) {
    if (count * this.lang.bySymbol <= this.lang.minimal) {
      return this.lang.minimal;
    } else return count * this.lang.bySymbol;
  }

  calculateMinutes(count: number) {
    let minutes = 60;

    if (this.lang.speed >= count) {
      return minutes;
    } else {
      minutes = 30 + count /this.lang.speed*60;
      if (minutes % 30 > 10) {
        minutes += 30 - (minutes % 30);
      } else minutes -= minutes % 30;
      return minutes;
    }
  }
}
