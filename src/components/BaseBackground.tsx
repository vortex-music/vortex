import { Box } from "@mui/material"

export default () => {
    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0.8,
            background: "radial-gradient(circle at 50% 50%, var(--accent-color), transparent);" +
                "radial-gradient(at 40% 30%, var(--accent-color), transparent);" +
                "radial-gradient(at 70% 80%, rgba(255, 223, 0, 0.5), transparent);",

            backgroundSize: '150% 150%',
            backgroundRepeat: 'no-repeat',
            animation: "animate-background 30s infinite alternate ease-in-out;",
        }}>
        </Box>
    )
}