import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

@ObjectType()
export class DailyAdjusted {
  @Field()
  public dateTime: string = "";
  @Field(type => Float)
  public open: number = 0;
  @Field(type => Float)
  public high: number = 0;
  @Field(type => Float)
  public low: number = 0;
  @Field(type => Float)
  public close: number = 0;
  @Field(type => Float)
  public adjustedClose: number = 0;
  @Field(type => Int)
  public volume: number = 0;
  @Field(type => Float)
  public dividendAmount: number = 0;
  @Field(type => Float)
  public splitCoefficient: number = 0;
  constructor(inObj: object) {
    Object.assign(this, inObj);
  }
}
