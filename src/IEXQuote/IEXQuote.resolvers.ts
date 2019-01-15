import { Arg, Query, Resolver } from "type-graphql";
import { IEXQuote } from "./IEXQuote.type";
import { IEXQuoteService } from "./IEXQuoteService";

@Resolver(IEXQuote)
export class IEXQuoteResolver {
  constructor(private iexQuoteService = new IEXQuoteService()) {}

  @Query(returns => IEXQuote)
  public async iexQuote(@Arg("symbol") symbol: string) {
    const res = await this.iexQuoteService.forSymbol(symbol);
    return res;
  }
}
