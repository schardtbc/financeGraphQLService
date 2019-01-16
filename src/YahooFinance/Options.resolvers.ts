import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Options } from "./Options.type";
import { OptionsService } from "./OptionsService";

@Resolver(Options)
export class OptionsResolver {
  constructor(private optionService = new OptionsService()) {}

  @FieldResolver(returns => [Options])
  public Contract(@Root() objArray: object[]) {
    const res = this.optionService.fromObjArray(objArray);
    return res;
  }

}
