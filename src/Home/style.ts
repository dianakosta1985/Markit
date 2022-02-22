import { Typography, TypographyProps, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface StyleProps extends TypographyProps {
    color?: string;
    fontSize?: string;
    paddingRight?: string;
    fontWeight?: string;
  } 

export const StyledTypography = styled(Typography as React.ComponentType<StyleProps>)`
    color: ${props => props.color}; 
    font-size:${props => props.fontSize};
    padding-right:${props=>props.paddingRight};
    font-weight:${props=>props.fontWeight};
`;

export const StyledGrid = styled(Grid)`
    display:flex;
    justify-content:space-between;
    border-top: 1px solid #C0C0C0;
`;
