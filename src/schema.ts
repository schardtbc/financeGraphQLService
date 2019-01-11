import { gql } from apollo-server


export const typeDefs = gql`
    type Query {
        service: ServiceInfo
        profile(symbol: String) CompanyProfile
        price(symbol: String) Float
        ohlcv(symbol: String) OHLCV
        iexquote(symbol: String) IEXQuote
        option(symbol: String) Option
        optionChain(symbol: String) [Option]
        puts(symbol: String) [Options]
        calls(symbol: String) [Options]
        historyFull(symbol: String) [OHLVC]
        intraday(symbol: String) [OHLCV]
    }
    type ServiceInfo {
        name: String
        url: String
        owner: Owner
        license: License
        rateLimit: [RateLimit]
    }
    type RateLimit {
        query: String
        maxConcurrent: Integer
        minTime: Integer
        reservoir: Integer
        reservoirRefreshAmount: Integer
        reservoirRefreshInterval: Integer
    }
    type Owner {
        firstName: String
        lastName: String
        company: String
        email: String
        phone: String
    }
    interface IOHLCV {
        open: Float
        high: Float
        low: Float
        close: Float
        volume: Integer        
    }
    type OHLCV implements IOHLCV {
        interval: interval
        symbol: String
        dateTime: String
        epoch: Integer
        open: Float
        high: Float
        low: Float
        close: Float
        volume: Integer
    }
    type Epoch: Integer
    enum Interval {
        ONE_MINUTE
        FIVE_MINUTE
        ONE_HOUR
        ONE_DAY
        ONE_WEEK
        ONE_MONTH
    }
    type CompanyProfile {
        symbol: String
        companyName: String
        exchange: String
        industry: String
        website: URL
        description: String
        CEO: String
        issueType: String
        sector: String
        tags: [String]
        image: URL
    }
    type URL: String
    type Quote {
        price: Float
        epoch: Float
        source: String
        realTime: Boolean
        askPrice: Float
        bidPrice: Float
        askSize: Integer
        bidSize: Integer
    }
    type IEXQuote implements Quote {
        epoch: Epoch
        source: String
        realTime: Boolean  
        askPrice: Float
        bidPrice: Float
        askSize: Integer
        bidSize: Integer
        iex: IEXDetailQuote
    }
    type IEXDetailQuote {
        symbol: String
        companyName: String
        primaryExchange: String
        sector: String
        calculationPrice: String,
        open: Float,
        openTime: Integer,
        close: Float,
        closeTime: Integer,
        high: Float,
        low: Float,
        latestPrice: Float,
        latestSource: Previous close,
        latestTime: String
        latestUpdate: Epoch
        latestVolume: Integer
        iexRealtimePrice: Float,
        iexRealtimeSize: Float,
        iexLastUpdated: Epoch
        delayedPrice: Float,
        delayedPriceTime: Epoch
        extendedPrice: Float,
        extendedChange: Float,
        extendedChangePercent: Float,
        extendedPriceTime: Epoch
        previousClose: Float,
        change: Float,
        changePercent: Float,
        iexMarketPercent: Float,
        iexVolume: Integer
        avgTotalVolume: Integert
        iexBidPrice: Float
        iexBidSize: Integer
        iexAskPrice: Float
        iexAskSize: Integer
        marketCap: Float
        peRatio: Float
        week52High: Float
        week52Low: Float
        ytdChange: Float
    }
    type YahooQuote implements Quote {
        epoch: Epoch
        source: String
        realTime: Boolean  
        askPrice: Float
        bidPrice: Float
        askSize: Integer
        bidSize: Integer
        yahoo: YahooDetailQuote
    }
    type YahooDetailQuote {
        language: String
        region: String
        quoteType: String
        quoteSourceName: String
        currency: String
        shortName: String
        sharesOutstanding: Float
        bookValue: Float
        fiftyDayAverage: Float
        fiftyDayAverageChange: Float
        fiftyDayAverageChangePercent: Float
        twoHundredDayAverage: Float
        twoHundredDayAverageChange: Float
        twoHundredDayAverageChangePercent: Float
        marketCap: Float
        forwardPE: Float
        priceToBook: Float
        sourceInterval: Float
        exchangeTimezoneName: String
        exchangeTimezoneShortName: String
        gmtOffSetMilliseconds: Integer
        priceHint: Float
        esgPopulated: Boolean
        tradeable: Boolean
        regularMarketPrice: Float
        regularMarketTime: Float
        regularMarketChange: Float
        regularMarketOpen: Float
        regularMarketDayHigh: Float
        regularMarketDayLow: Float
        regularMarketVolume: Integer
        exchange: String
        marketState: String
        epsForward: Float
        market: String
        postMarketChangePercent: Float
        postMarketTime: Float
        postMarketPrice: Float
        postMarketChange: Float
        regularMarketChangePercent: Float
        regularMarketDayRange: String
        regularMarketPreviousClose: Float
        bid: Float
        ask: Float
        bidSize: Integer
        askSize: Integer
        messageBoardId: String
        fullExchangeName: String
        longName: String
        financialCurrency: String
        averageDailyVolume3Month: Integer
        averageDailyVolume10Day: Integert
        fiftyTwoWeekLowChange: Float
        fiftyTwoWeekLowChangePercent: Float
        fiftyTwoWeekRange: String
        fiftyTwoWeekHighChange: Float
        fiftyTwoWeekHighChangePercent: Float
        fiftyTwoWeekLow: Float
        fiftyTwoWeekHigh: Float
        dividendDate: Epoch
        earningsTimestamp: Epoch
        earningsTimestampStart: Epoch
        earningsTimestampEnd: Epoch
        trailingAnnualDividendRate: Float
        trailingPE: Float
        trailingAnnualDividendYield: Float
        epsTrailingTwelveMonths: Float
        exchangeDataDelayedBy: Float
        symbol: String
    }

`