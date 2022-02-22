import React, { useState } from "react";
import {
  Grid,
  IconButton,
  InputBase,
  Typography,
  Paper,
  Autocomplete,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Quote, Theme, SymbolArr } from "../types/quote";
import moment from "moment-timezone";
import { StyledGrid, StyledTypography } from "./style";

    const quote1: Quote = {
    name: "Microsoft corp",
    symbol: {label:"MSFT", value:"MSFT"},
    lastPrice: 72.28,
    change: 0.52,
    changePercent: 0.72,
    timestamp: new Date(),
    low: 71.81,
    hight: 72.89,
    open: 71.97,
    valume: 33.3, //M
    marketCap: 558.0, //B
    };

const Home = () => {
  
  const [quote, setQuote] = useState(quote1);
  const handleInputChange = (event:  React.FormEvent<EventTarget>, value: string) => {
    CallOut(); 
  }
    const CallOut = async() =>  {
        debugger;
        const url = "???"; //TBD  +?value
        const responsePromise = await fetch(url);
        const response = await responsePromise.json();
        setQuote(response);
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
            {`${quote.name} (${quote.symbol.label})`}
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
            {quote.lastPrice}
          </StyledTypography>
          <StyledTypography
            paddingRight={"5px"}
            fontSize={"20px"}
            color={`${quote.change > 0 ?Theme.positiveColor: Theme.negativeColor}`}
          >
            {`${quote.change > 0 ? "+" : quote.change < 0 ? "-" : ""}${
              quote.change
            }`}
          </StyledTypography>
          <StyledTypography
            paddingRight={"5px"}
            fontSize={"20px"}
            color={`${quote.changePercent > 0 ?Theme.positiveColor: Theme.negativeColor}`}
          >
            {`(${
              quote.changePercent > 0 ? "+" : quote.changePercent < 0 ? "-" : ""
            }${quote.changePercent})%`}
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
              {`${quote.low} - ${quote.hight}`}
            </StyledTypography>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledTypography color={Theme.mainColor}>Open</StyledTypography>
            <StyledTypography fontWeight={"600"}>{quote.open}</StyledTypography>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledTypography color={Theme.mainColor}>Valume</StyledTypography>
            <StyledTypography fontWeight={"600"}>
              {quote.valume}
            </StyledTypography>
          </StyledGrid>

          <StyledGrid item xs={12} sx={{ borderBottom: `1px solid ${Theme.mainColor}` }}>
            <StyledTypography color={Theme.mainColor}>Market Cap</StyledTypography>
            <StyledTypography fontWeight={"600"}>
              {quote.marketCap}
            </StyledTypography>
          </StyledGrid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Home;
