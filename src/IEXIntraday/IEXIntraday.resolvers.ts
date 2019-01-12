
import { Arg, Query, Resolver} from "type-graphql";
import { IEXIntraday } from "./IEXIntraday.type"
import { IEXIntradayService } from "./IEXIntradayService"

@Resolver(IEXIntraday)
export class IEXIntradayResolver {
    constructor(
    private iexIntradayService = new IEXIntradayService()
    ) {}

    @Query(returns => [IEXIntraday])
    public async iexIntraday(@Arg("symbol") symbol: string) {
        const res = await this.iexIntradayService.forSymbol(symbol);
        return res;
    }
}

