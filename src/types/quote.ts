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
    MarketCap: number | null
}


export const getRoundVal = (numb:number) => {
  if(!numb) return null;
  return Math.round((numb + Number.EPSILON) * 100) / 100;
 
}

export const convToInterCurrency =  (labelValue: number | null) => {
   if(!labelValue) return null;
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
    {label:"AAPL", value:"AAPL"},
    {label:"INFO",value:"INFO"},
    {label:"BRKA", value:"BRKA"},
    {label:"F", value:"F"},
    {label:"PLT", value:"PLT"},
    {label:"BIG", value:"BIG"},
    {label:"TWX", value:"TWX"},
    {label:"AME", value:"AME"},
    {label:"JWN", value:"JWN"},
    {label:"CVS", value:"CVS"},
    {label:"MS", value:"MS"},
    {label:"MET", value:"MET"}
]

  export const Theme =  {
    mainColor:"#C0C0C0",
    positiveColor:"#228B22",
    negativeColor:"red"
  }