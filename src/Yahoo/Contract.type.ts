import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Contract {
  @Field()
  public contractSymbol: string = "";
  @Field()
  public strike: number = 0;
  @Field()
  public currency: string = "";
  @Field()
  public lastPrice: number = 0;
  @Field()
  public change: number = 0;
  @Field()
  public percentChange: number = 0;
  @Field(type =>  Int)
  public volume: number = 0;
  @Field(type => Int)
  public openInterest: number = 0;
  @Field()
  public bid: number = 0;
  @Field()
  public ask: number = 0;
  @Field()
  public contractSize: string = "";
  @Field()
  public expiration: number = 0;
  @Field(type => GraphQLTimestamp)
  public lastTradeDate: number = 0;
  @Field()
  public impliedVolatility: number = 0;
  @Field()
  public inTheMoney: boolean = false;
  constructor(inObj: object) {
    Object.assign(this, inObj);
  }
}