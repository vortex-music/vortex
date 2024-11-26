import clsx from 'clsx';
import GlobalPlayerControls from './GlobalPlayerControls';

/* Window Controls for Windows / Linux */
const WindowControls = () => {
    return (<></>)
    // return (
    //     window.vortexAPI.platform === 'darwin' ? <></> :
    //         <Box sx={{
    //             '&': { "app-region": 'no-drag' },
    //             justifySelf: 'end',
    //             display: 'flex'
    //         }}>
    //             <IconButton onClick={window.vortexAPI.windowControls.minimize}><RemoveRounded /></IconButton>
    //             <IconButton onClick={window.vortexAPI.windowControls.restore}><CropSquareRounded /></IconButton>
    //             <IconButton
    //                 onClick={window.vortexAPI.windowControls.close}
    //                 sx={{ '&:hover': { background: '#da5151', color: 'white' } }}
    //             >
    //                 <CloseRounded />
    //             </IconButton>
    //         </Box>
    // )
}

export default () => {
    return (
        <div className={clsx(
            'h-14 pl-4 pr-4 flex',
            { 'ml-20': window.vortexAPI.platform === 'darwin' }
        )}>
            <GlobalPlayerControls />
            <WindowControls />
        </div>
        // <Box sx={{
        //     '&': { "app-region": "drag" }, /* Add Electron Custom Title Bar Drag */
        //     padding: '4px',
        //     height: '46px',
        //     display: 'flex',
        // }}>
        //     <GlobalPlayerControls sx={{ flexGrow: 1 }} />
        //     <WindowControls />
        // </Box>
    )
}