import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import AppTitleBar from './sections/AppTitleBar'
import DefaultTheme from './styles/DefaultTheme'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Box sx={{ height: '100%', width: '100%' }}>
        <AppTitleBar />
      </Box>
    </ThemeProvider>
  )
}

export default App
