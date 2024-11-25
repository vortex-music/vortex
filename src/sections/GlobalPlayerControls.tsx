import { Box, SxProps } from "@mui/material"

export default (props: { sx?: SxProps }) => {
    return (
        <Box sx={{ ...props.sx }}>
    {"Platform: " + window.vortexAPI.platform}
        </Box>
    )
}