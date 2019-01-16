import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { OptionChain } from "./OptionChain.type";
import { OptionChainService } from "./OptionChainService";

@Resolver(OptionChain)
export class QuoteResolver {
  constructor(private optionChainService = new OptionChainService()) {}

  @Query(returns => [OptionChain])
  public async optionChain(@Arg("symbol") symbol: string) {
    const res = await this.optionChainService.forSymbol(symbol);
    return res;
  }
  @FieldResolver(returns => [String])
  public symbols(@Root() objArray: object[]) {
    const res = OptionChainService.toSymbolArray(objArray);
    return res;
  }
}