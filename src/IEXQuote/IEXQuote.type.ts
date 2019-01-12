
import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

@ObjectType()
export class IEXQuote {
    @Field()
    public symbol: string ='';
    @Field()   
    public companyName: string ='';
    @Field()
    public primaryExchange: string = '';
    @Field()
    public sector: string = '';
    @Field()
    public calculationPrice: string = '';
    @Field()
    public open: number = 0;
    @Field(type => Int)
    public openTime: number = 0;    
    @Field()
    public close: number = 0;
    @Field()
    public closeTime: number = 0;
    @Field()
    public high: number = 0;
    @Field()
    public low: number = 0
    @Field()
    public latestPrice: number = 0;
    @Field()
    public latestSource: string = '';
    @Field()
    public latestTime: string='' ;
    @Field(type => GraphQLTimestamp)
    public latestUpdate: number = 0;
    @Field(type => Int)
    public latestVolume: number = 0;
    @Field()
    public iexRealtimePrice: number = 0;
    @Field()
    public iexRealtimeSize: number = 0;    
    @Field(type => GraphQLTimestamp)
    public iexLastUpdated: number = 0;
    @Field()
    public delayedPrice: number = 0;
    @Field(type => GraphQLTimestamp)
    public delayedPriceTime: number = 0;
    @Field()
    public extendedPrice: number = 0;
    @Field()
    public extendedChange: number = 0;
    @Field()
    public extendedChangePercent: number = 0;
    @Field(type => GraphQLTimestamp)
    public extendedPriceTime: number = 0 ;
    @Field()
    public previousClose: number = 0 ;
    @Field()
    public change: number = 0;
    @Field()
    public changePercent: number = 0;
    @Field()
    public iexMarketPercent: number = 0;
    @Field(type => Int)
    public iexVolume: number = 0;
    @Field(type => Int)
    public avgTotalVolume: number = 0;;
    @Field()
    public iexBidPrice: number = 0;
    @Field(type => Int)
    public iexBidSize: number = 0;
    @Field()
    public iexAskPrice: number = 0;
    @Field(type => Int)
    public iexAskSize: number = 0;
    @Field()
    public marketCap: number = 0;
    @Field()
    public peRatio: number = 0;
    @Field()
    public week52High: number = 0;
    @Field()
    public week52Low: number=  0;
    @Field()
    public ytdChange: number = 0;
}