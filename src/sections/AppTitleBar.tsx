import clsx from "clsx";
import GlobalPlayerControls from "./GlobalPlayerControls";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import moonIcon from "../assets/icons/moon.svg";
import sunIcon from "../assets/icons/sun.svg";
import IconButton from "../components/base/IconButton";
import { CogIcon } from "@heroicons/react/24/solid";

/* Window Controls for Windows / Linux */
const WindowControls = () => {
    return <></>;
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
};

export default () => {
    return (
        <div
            className={clsx("h-14 pl-4 pr-4 flex items-center", {
                /* macOS Traffic Lights Left Padding */
                "ml-20": window.vortexAPI.platform === "darwin",
            })}
        >
            { /* Global Player Controls */ }
            <GlobalPlayerControls />
            <IconButton className="ml-1"><CogIcon className="size-5" /></IconButton>

            { /* Window Controls (Windows / Linux) */}
            <WindowControls />
        </div>
    );
};