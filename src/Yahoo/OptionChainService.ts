import { YahooFinance } from "yahoo_finance_api_wrapper";
import { OptionChain } from "./OptionChain.type";

export class OptionChainService {
  private optionChain: OptionChain[] = [];

  public async forSymbol(symbol: string) {
    const res = await YahooFinance.options(symbol);
    this.optionChain = res.map((obj: object) => new OptionChain(obj));
    return this.optionChain;
  }
}