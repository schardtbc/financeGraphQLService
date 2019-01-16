import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

@ObjectType()
export class OptionQuote {
  @Field()
  public language: string = "";
  @Field()
  public region: string = "";
  @Field()
  public quoteType: string = "";
  @Field()
  public currency: string = "";
  @Field()
  public market: string = "";
  @Field()
  public esgPopulated: boolean = false;
  @Field()
  public tradeable: boolean = false;
  @Field()
  public exchangeDataDelayedBy: number = 0;
  @Field()
  public regularMarketChangePercent: number = 0;
  @Field()
  public regularMarketPreviousClose: number = 0;
  @Field()
  public bid: number = 0;
  @Field()
  public ask: number = 0;
  @Field()
  public fullExchangeName: number = 0;
  @Field()
  public fiftyTwoWeekLowChange: number = 0;
  @Field()
  public fiftyTwoWeekLowChangePercent: number = 0;
  @Field()
  public fiftyTwoWeekRange: string = "";
  @Field()
  public fiftyTwoWeekHighChange: number = 0;
  @Field()
  public fiftyTwoWeekHighChangePercent: number = 0;
  @Field()
  public fiftyTwoWeekLow: number = 0;
  @Field()
  public fiftyTwoWeekHigh: number = 0;
  @Field()
  public strike: number = 0;
  @Field()
  public underlyingSymbol: string = "";
  @Field()
  public openInterest: number = 0;
  @Field()
  public expireDate: number = 0;
  @Field()
  public expireIsoDate: string = "";
  @Field()
  public sourceInterval: number = 0;
  @Field()
  public exchangeTimezoneName: string = "";
  @Field()
  public exchangeTimezoneShortName: string = "";
  @Field()
  public gmtOffSetMilliseconds: number = 0;
  @Field()
  public shortName: string = "";
  @Field()
  public priceHint: number = 0;
  @Field()
  public regularMarketPrice: number = 0;
  @Field()
  public regularMarketTime: number = 0;
  @Field()
  public regularMarketChange: number = 0;
  @Field()
  public regularMarketOpen: number = 0;
  @Field()
  public regularMarketDayHigh: number = 0;
  @Field()
  public regularMarketDayLow: number = 0;
  @Field()
  public regularMarketVolume: number = 0;
  @Field()
  public marketState: string = "";
  @Field()
  public exchange: string = "";
  @Field()
  public regularMarketDayRange: number = 0;
  @Field()
  public symbol: string = "";

}
