import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

import { Contract } from "./Contract.type"

@ObjectType()
export class Options {
  @Field()
  public expirationDate: number = 0;
  @Field()
  public hasMiniOptions: boolean = false;
  @Field(type => Contract)
  public calls: Contract[] = [];
  @Field(type => Contract)
  public puts: Contract[] = [];
  constructor(objIn: object){
    Object.assign(this,objIn)
  }
}