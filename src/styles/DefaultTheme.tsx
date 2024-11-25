import { createTheme } from "@mui/material";

/* Define Constants */
const BUTTON_BORDER_RADIUS = '20%'

export default createTheme({
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: BUTTON_BORDER_RADIUS,
                    height: '32px',
                    width: '32px',
                    '& svg': { width: '16px' }, /* HeroIcons SVGs */
                    "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                        /* Ripple Border Radius */
                        borderRadius: BUTTON_BORDER_RADIUS
                    }
                },
            },
        },
    },
})