import { IEX } from "iex-api-wrapper";
import { IEXIntraday } from "./IEXIntraday.type";

export class IEXIntradayService {
  private iexIntraday: IEXIntraday[] = [];

  public async forSymbol(symbol: string) {
    const res = await IEX.byMinuteToday(symbol);
    this.iexIntraday = res.map((obj: object) => new IEXIntraday(obj));
    return this.iexIntraday;
  }
}
