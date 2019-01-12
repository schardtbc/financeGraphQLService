import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

@ObjectType()
export class IEXIntraday {
    @Field()
    public date: string = ''
    @Field()
    public minute: string = ''
    @Field()
    public label: string = ''
    @Field(type => Float)
    public high: number = 0 
    @Field(type => Float)
    public low: number = 0 
    @Field(type => Float)
    public average: number = 0 
    @Field(type => Int)
    public volume: number = 0
    @Field(type => Int)     
    public notional: number = 0 
    @Field(type => Int)
    public numberOfTrades: number = 0 
    @Field(type => Float)
    public marketHigh: number = 0 
    @Field(type => Float)
    public marketLow: number = 0 
    @Field(type => Float)
    public marketAverage: number = 0 
    @Field(type => Int)
    public marketVolume: number = 0
    @Field(type => Int)
    public marketNotional: number = 0
    @Field(type => Int)
    public marketNumberOfTrades: number = 0
    @Field(type => Float)
    public open: number = 0 
    @Field(type => Float)
    public close: number = 0
    @Field(type => Float)
    public marketOpen: number = 0
    @Field(type => Float)
    public marketClose: number = 0
    @Field(type => Float)
    public changeOverTime: number = 0
    @Field(type => Float)
    public marketChangeOverTime: number = 0
    constructor(inObj: object) {
        Object.assign(this,inObj);
      }
}