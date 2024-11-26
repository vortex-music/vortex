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
        <div className='h-14 pl-4 ml-20 pr-4 flex'>
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