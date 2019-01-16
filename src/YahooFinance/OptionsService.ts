import { YahooFinance } from "yahoo_finance_api_wrapper";

import { Options } from "./Options.type";

export class OptionsService {
  private options: Options[] = [];

  public fromObjArray(arrayIn: object[]) {
    this.options = arrayIn.map((obj: object) => new Options(obj));
    return this.options;
  }
}
