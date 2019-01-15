import { YahooFinance } from "yahoo_finance_api_wrapper";
import { Contract } from "./Contract.type";

export class ContractService {
  private contracts: Contract[] = [];

  public fromObjArray(arrayIn: object[]) {
    this.contracts = arrayIn.map((obj: object) => new Contract(obj));
    return this.contracts;
  }
}