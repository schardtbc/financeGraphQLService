import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";
import { Quote } from "./Quote.type";

import { Options } from "./Options.type"


@ObjectType()
export class OptionChain {
  @Field()
  public underlyingSymbol: string = "";
  @Field(type => [Int])
  public expirationDates: number[] =[];
  @Field(type => [Number])
  public strikes: number[] = [];
  @Field(type => [String])
  public symbols: string[] = [];
  @Field()
  public hasMiniOptions: boolean = false;
  @Field(type => Quote)
  public quote: Quote = new Quote({});
  @Field(type => [Options])
  public options: Options[] = [];
  constructor(objIn: object){
    Object.assign(this,objIn)
  }
}