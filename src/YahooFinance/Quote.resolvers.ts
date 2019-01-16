import { Arg, Query, Resolver } from "type-graphql";
import { Quote } from "./Quote.type";
import { QuoteService } from "./QuoteService";

@Resolver(Quote)
export class QuoteResolver {
  constructor(private quoteService = new QuoteService()) {}

  @Query(returns => [Quote])
  public async quote(@Arg("symbol") symbol: string) {
    const res = await this.quoteService.forSymbol(symbol);
    return res;
  }
}