import { Box, IconButton } from '@mui/material';
import GlobalPlayerControls from './GlobalPlayerControls';
import { CloseRounded, RemoveRounded, CropSquareRounded } from '@mui/icons-material';

/* Window Controls for Windows / Linux */
const WindowControls = () => {
    return (
        window.vortexAPI.platform === 'darwin' ? <></> :
            <Box sx={{
                '&': { "app-region": 'no-drag' },
                justifySelf: 'end',
                display: 'flex'
            }}>
                <IconButton onClick={window.vortexAPI.windowControls.minimize}><RemoveRounded /></IconButton>
                <IconButton onClick={window.vortexAPI.windowControls.restore}><CropSquareRounded /></IconButton>
                <IconButton
                    onClick={window.vortexAPI.windowControls.close}
                    sx={{ '&:hover': { background: '#da5151', color: 'white' } }}
                >
                    <CloseRounded />
                </IconButton>
            </Box>
    )
}

export default () => {
    return (
        <Box sx={{
            '&': { "app-region": "drag" }, /* Add Electron Custom Title Bar Drag */
            padding: '4px',
            height: '46px',
            display: 'flex',
        }}>
            <GlobalPlayerControls sx={{ flexGrow: 1 }} />
            <WindowControls />
        </Box>
    )
}