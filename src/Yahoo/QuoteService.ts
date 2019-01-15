import { YahooFinance } from "yahoo_finance_api_wrapper";
import { Quote } from "./Quote.type";

export class QuoteService {
  private quote: Quote[] = [];

  public async forSymbol(symbol: string) {
    const res = await YahooFinance.quote(symbol);
    this.quote = res.map((obj: object) => new Quote(obj));
    return this.quote;
  }
}