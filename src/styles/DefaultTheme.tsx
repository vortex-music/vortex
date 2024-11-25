import { createTheme } from "@mui/material";

/* Define Constants */
const BUTTON_BORDER_RADIUS = '20%'
const PALETTE_MODE = 'dark'

/* Get Default Properties */
const { palette } = createTheme({ palette: { mode: PALETTE_MODE } });

export default createTheme({
    palette: { 
        mode: PALETTE_MODE,
        background: {
            default: '#000000',
            paper: '#000000'
        }
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    /* Buttons on Draggable Title Bar */
                    '&': { "app-region": "no-drag" },
                    '& svg': { width: '20px' },
                    height: '32px',
                },
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    border: '0px',
                    '&.Mui-selected': {
                        backgroundColor: palette.action.selected,
                        border: '0px'
                    },
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: BUTTON_BORDER_RADIUS,
                    width: '36px',
                    "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                        /* Ripple Border Radius */
                        borderRadius: BUTTON_BORDER_RADIUS
                    }
                },
            },
        }
    },
})