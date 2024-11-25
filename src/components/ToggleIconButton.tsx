import { useTheme } from "@mui/material";
import { ToggleButton, ToggleButtonProps } from "@mui/material";
import React from "react";

/* Wrapper Around Toggle Button with Width Limited to 36px (IconButton Width) */
export default (props: ToggleButtonProps) => {
    const theme = useTheme();
    const iconButtonStyle: any = theme.components?.MuiIconButton?.styleOverrides?.root;

    return (
        <ToggleButton {...props} sx={{ width: iconButtonStyle.width ?? "" }}>
            {props.children}
        </ToggleButton>
    )
}