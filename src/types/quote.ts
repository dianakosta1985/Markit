export interface Quote {
    name: string,
    symbol: Symbol,
    lastPrice: number,
    change:number,
    changePercent: number,
    timestamp: Date,
    low: number,
    hight: number,
    open: number,
    valume: number,
    marketCap: number

}

interface Symbol{
    label: string,
    value: string
}

export const SymbolArr =  [
    {label:"MSFT", value:"MSFT"},
    {label:"AAPL", value:"MSFT"},
    {label:"INFO",value:"MSFT"},
    {label:"BRKA", value:"MSFT"},
    {label:"F", value:"MSFT"},
    {label:"PLT", value:"MSFT"},
    {label:"BIG", value:"MSFT"},
    {label:"TWX", value:"MSFT"},
    {label:"AME", value:"MSFT"},
    {label:"JWN", value:"MSFT"},
    {label:"VS", value:"MSFT"},
    {label:"MS", value:"MSFT"},
    {label:"MET", value:"MSFT"}
]

  export const Theme =  {
    mainColor:"#C0C0C0",
    positiveColor:"#228B22",
    negativeColor:"red"
  }