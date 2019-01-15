import { Arg, FieldResolver, Query, Resolver, Root} from "type-graphql";
import { Contract } from "./Contract.type";
import { ContractService } from "./ContractService";

@Resolver(Contract)
export class ContractResolver {
  constructor(private contractService = new ContractService()) {}

  @FieldResolver(returns => [Contract])
  public Contract(@Root() objArray: object[]) {
    const res = this.contractService.fromObjArray(objArray);
    return res;
  }
}