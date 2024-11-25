import { Box, CssBaseline, Divider, ThemeProvider } from '@mui/material'
import AppTitleBar from './sections/AppTitleBar'
import DefaultTheme from './styles/DefaultTheme'
import BaseBackground from './components/BaseBackground'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <BaseBackground />
      <Box sx={{
        position: 'relative', height: '100%',
        width: '100%', display: 'flex',
        flexDirection: 'column'
      }}>
        <AppTitleBar />
        <Divider />
        <Box sx={{ flexGrow: 1, width: '100%' }}>
          Content
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
