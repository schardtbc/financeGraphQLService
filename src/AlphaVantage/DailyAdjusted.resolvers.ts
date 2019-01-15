import { Arg, Query, Resolver } from "type-graphql";
import { DailyAdjusted } from "./DailyAdjusted.type";
import { DailyAdjustedService } from "./DailyAdjustedService";

@Resolver(DailyAdjusted)
export class DailyAdjustedResolver {
  constructor(private dailyAdjustedService = new DailyAdjustedService()) {}

  @Query(returns => [DailyAdjusted])
  public async dailyAdjusted(@Arg("symbol") symbol: string) {
    const res = await this.dailyAdjustedService.forSymbol(symbol, "compact");
    return res;
  }
  @Query(returns => [DailyAdjusted])
  public async dailyFull(@Arg("symbol") symbol: string) {
    const res = await this.dailyAdjustedService.forSymbol(symbol, "full");
    return res;
  }
}
