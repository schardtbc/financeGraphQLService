import { YahooFinance } from "yahoo_finance_api_wrapper";
import { OptionChain } from "./OptionChain.type";

import moment from "moment"
import { puts } from "util";

const  YYMMDD = (epoch_ms: number): string => {
  const d = new Date(epoch_ms);
  return d.toISOString().substr(2,8).replace(/-/g,"")
}

const pad8 = (a: number) => (1e15+a+"").slice(-8);

export class OptionChainService {

  public static toSymbolArray(obj: {[k: string]: any}): string[] {
    const sym: string = obj["underlyingSymbol"];
    const exp: number[]  = obj["expirationDates"];
    const strike: number[] = obj["strikes"];
    const calls: string[] = [];
    const puts0: string[] = [];
    for (const e of exp) {
      for (const s of strike ){
        calls.push(sym + YYMMDD(e*1000) + "C" + pad8(s*1000));
        puts0.push(sym + YYMMDD(e*1000) + "P" + pad8(s*1000))
      }  
    }
    return  calls.concat(puts0);
  }

  private optionChain: OptionChain[] = [];

  public async forSymbol(symbol: string) {
    const res = await YahooFinance.optionChain(symbol);
    this.optionChain = res.map((obj: object) => new OptionChain(obj));
    return this.optionChain;
  }

};