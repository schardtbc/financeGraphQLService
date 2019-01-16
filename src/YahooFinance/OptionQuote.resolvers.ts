import { Arg, Query, Resolver } from "type-graphql";
import { OptionQuote } from "./OptionQuote.type";
import { OptionQuoteService } from "./OptionQuoteService";

@Resolver(OptionQuote)
export class OptionQuoteResolver {
  constructor(private optionQuoteService = new OptionQuoteService()) {}

  @Query(returns => OptionQuote)
  public async optionQuote(@Arg("symbol") symbol: string) {
    const res = await this.optionQuoteService.forSymbol(symbol);
    return res;
  }
}