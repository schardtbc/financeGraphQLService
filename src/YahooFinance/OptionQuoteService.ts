import { YahooFinance } from "yahoo_finance_api_wrapper";
import { OptionQuote } from "./OptionQuote.type";

import { convertToType } from "type-graphql/helpers/types"

export class OptionQuoteService {

  public async forSymbol(symbol: string) {
    const data: object = await YahooFinance.optionQuote(symbol);
    return convertToType(OptionQuote,data)
  }
}