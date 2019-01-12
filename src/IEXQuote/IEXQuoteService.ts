import { IEX } from "iex-api-wrapper"
import { IEXQuote } from "./IEXQuote.type"

export class IEXQuoteService {
    public iexQuote = new IEXQuote();

    public async forSymbol(symbol: string) {
       const res = await IEX.quote(symbol);
       this.iexQuote = Object.assign(res);
       return this.iexQuote;
    }
 }