export interface Quote {
    Name: string,
    Symbol: string,
    LastPrice: number,
    Change:number,
    ChangePercent: number,
    Timestamp: Date,
    Low: number,
    High: number,
    Open: number,
    Volume: number,
    MarketCap: number
}


export const getRoundVal = (numb:number) => {
  return Math.round((numb + Number.EPSILON) * 100) / 100;
}

export const convToInterCurrency =  (labelValue: number) => {

  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

  ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6

  ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3

  ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

  : Math.abs(Number(labelValue));

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