import React, { useEffect, useState } from "react";
import {
  Grid,
  IconButton,
  Typography,
  Paper,
  Autocomplete,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Quote, Theme, SymbolArr, getRoundVal, convToInterCurrency } from "../types/quote";
import moment from "moment-timezone";
import { StyledGrid, StyledTypography } from "./style";
import { getQuote } from "../API/quote";

    const initialState: Quote = {
    Name: "",
    Symbol: "",
    LastPrice: 0,
    Change: 0,
    ChangePercent: 0,
    Timestamp: new Date(),
    Low: 0,
    High: 0,
    Open: 0,
    Volume: 0, //M
    MarketCap: 0, //B
    };

const Home = () => {

  useEffect(()=>{
    CallOut(SymbolArr[0].label); 
  },[])
  
  const [quote, setQuote] = useState(initialState);
  const handleInputChange = (event:  React.FormEvent<EventTarget>, value: string) => {
    CallOut(value); 
  }
    const CallOut = async(value: string) =>  {
      const responsePromise = await getQuote(value);
      //console.log(responsePromise.data);
      setQuote(responsePromise.data);
    }    
  
  return (
    <Paper sx={{ width: "35%", p: 4 }}>
      <Grid container>
        <Grid item display="flex"
            justifyContent="start"
            alignItems="center"  xs={12} sx={{ borderBottom: `2px solid ${Theme.mainColor} `, py: 4 }}>
            <Autocomplete
                aria-label="input"
                sx={{width: "50%"}}
                options={SymbolArr.map((option) => option.label)}
                onInputChange={(e:React.FormEvent<EventTarget> ,v: string) => handleInputChange(e,v)}
                renderInput={(params) => 
                    <TextField {...params} aria-label="Symbol lookup" label="Symbol lookup" 
                       />}
            />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" >
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} py={2}>
          <StyledTypography
            color={Theme.mainColor}
            fontSize={"18px"}
            sx={{ textTransform: "uppercase" }}
          >
            {`${quote.Name} (${quote.Symbol})`}
          </StyledTypography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="start"
          alignItems="baseline"
        >
          <StyledTypography paddingRight={"10px"} fontSize={"28px"}>
            {quote.LastPrice}
          </StyledTypography>
          <StyledTypography
            paddingRight={"5px"}
            fontSize={"20px"}
            color={`${quote.Change > 0 ?Theme.positiveColor: Theme.negativeColor}`}
          >
            {`${quote.Change > 0 ? "+" : ""}${
              getRoundVal(quote.Change)
            }`}
          </StyledTypography>
          <StyledTypography
            paddingRight={"5px"}
            fontSize={"20px"}
            color={`${quote.ChangePercent > 0 ?Theme.positiveColor: Theme.negativeColor}`}
          >
            {`(${
              quote.ChangePercent > 0 ? "+" : ""
            }${getRoundVal(quote.ChangePercent)})%`}
          </StyledTypography>
        </Grid>
        <Grid item xs={12}>
          <StyledTypography fontSize={"12px"} color={Theme.mainColor} pb={2}>
            {`As of ${moment().format("LT")}`}
          </StyledTypography>
        </Grid>
        <Grid container xs={12}>
          <StyledGrid item xs={12}>
            <Typography sx={{ color: `${Theme.mainColor}` }}>Range</Typography>
            <StyledTypography fontWeight={"600"}>
              {`${quote.Low} - ${quote.High}`}
            </StyledTypography>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledTypography color={Theme.mainColor}>Open</StyledTypography>
            <StyledTypography fontWeight={"600"}>{quote.Open}</StyledTypography>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledTypography color={Theme.mainColor}>Valume</StyledTypography>
            <StyledTypography fontWeight={"600"}>
              {convToInterCurrency(quote.Volume)}
            </StyledTypography> 
          </StyledGrid>

          <StyledGrid item xs={12} sx={{ borderBottom: `1px solid ${Theme.mainColor}` }}>
            <StyledTypography color={Theme.mainColor}>Market Cap</StyledTypography>
            <StyledTypography fontWeight={"600"}>
              {convToInterCurrency(quote.MarketCap)}
            </StyledTypography>
          </StyledGrid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Home;
