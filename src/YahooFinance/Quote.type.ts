import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Quote {
  @Field()
  public language: string = "";
  @Field()
  public region: string = "";
  @Field()
  public quoteType: string = "";
  @Field()
  public quoteSourceName: string = "";
  @Field()
  public currency: string = "";
  @Field()
  public shortName: string = "";
  @Field(type => Int)
  public sharesOutstanding: number = 0;
  @Field()
  public bookValue: number = 0;
  @Field()
  public fiftyDayAverage: number = 0;
  @Field()
  public fiftyDayAverageChange: number = 0;
  @Field()
  public fiftyDayAverageChangePercent: number = 0;
  @Field()
  public twoHundredDayAverage: number = 0;
  @Field()
  public twoHundredDayAverageChange: number = 0;
  @Field()
  public twoHundredDayAverageChangePercent: number = 0;
  @Field()
  public marketCap: number = 0;
  @Field()
  public forwardPE: number = 0;
  @Field()
  public priceToBook: number = 0;
  @Field(type => Int)
  public sourceInterval: number = 0;
  @Field()
  public exchangeTimezoneName: string = "";
  @Field()
  public exchangeTimezoneShortName: string = "";
  @Field(type => Int)
  public gmtOffSetMilliseconds: number = 0;
  @Field()
  public priceHint: number = 0;
  @Field(type => Boolean)
  public esgPopulated: boolean = false;
  @Field(type => Boolean)
  public tradeable: boolean = false;
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
  public exchange: string = "";
  @Field()
  public marketState: string = "";
  @Field()
  public epsForward: number = 0;
  @Field()
  public market: string = "";
  @Field()
  public postMarketChangePercent: number = 0;
  @Field()
  public postMarketTime: number = 0;
  @Field()
  public postMarketPrice: number = 0;
  @Field()
  public postMarketChange: number = 0;
  @Field()
  public regularMarketChangePercent: number = 0;
  @Field()
  public regularMarketDayRange: string = "";
  @Field()
  public regularMarketPreviousClose: number = 0;
  @Field()
  public bid: number = 0;
  @Field()
  public ask: number = 0;
  @Field(type => Int)
  public bidSize: number = 0;
  @Field(type => Int)
  public askSize: number = 0;
  @Field()
  public messageBoardId: string = "";
  @Field()
  public fullExchangeName: string = "";
  @Field()
  public longName: string = "";
  @Field()
  public financialCurrency: string = "";
  @Field(type => Int)
  public averageDailyVolume3Month: number = 0;
  @Field(type => Int)
  public averageDailyVolume10Day: number = 0;
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
  public dividendDate: number = 0;
  @Field()
  public earningsTimestamp: number = 0;
  @Field()
  public earningsTimestampStart: number = 0;
  @Field()
  public earningsTimestampEnd: number = 0;
  @Field()
  public trailingAnnualDividendRate: number = 0;
  @Field()
  public trailingPE: number = 0;
  @Field()
  public trailingAnnualDividendYield: number = 0;
  @Field()
  public epsTrailingTwelveMonths: number = 0;
  @Field()
  public exchangeDataDelayedBy: number = 0;
  @Field()
  public symbol: string = "";
  constructor(inObj: object) {
    Object.assign(this, inObj);
  }
}
