import { AlphaVantage } from "alpha_vantage_api_wrapper";

import { DailyAdjusted } from "./DailyAdjusted.type";

export class DailyAdjustedService {
  private history: DailyAdjusted[] = [];

  public async forSymbol(symbol: string, outputsize: string) {
    const res = await AlphaVantage.dailyAdjusted(symbol, outputsize);
    this.history = res.map((obj: object) => new DailyAdjusted(obj));
    return this.history;
  }
}
