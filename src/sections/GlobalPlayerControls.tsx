import { ArrowsRightLeftIcon, BackwardIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid"
import IconButton from "../components/base/IconButton"
import React from "react";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";

export default () => {
    /* Use Redux! */
    const [isPlaying, _setIsPlaying] = React.useState(false);

    return (
        <div className="h-full w-full flex items-center gap-x-1 wa-nodrag">
            {/* This could be ToggleButton in Future! */}
            <IconButton><ArrowsRightLeftIcon className="size-5" /></IconButton>
            <IconButton><BackwardIcon className="size-5" /></IconButton>

            {/* Play & Pause Controls */}
            <IconButton>
                {(isPlaying) ? <PauseIcon className="size-5" /> :
                    <PlayIcon className="size-5" />}
            </IconButton>

            {/* Other Media Controls */}
            <IconButton><ForwardIcon className="size-5" /></IconButton>
            <IconButton><ArrowPathRoundedSquareIcon className="size-5" /></IconButton>
        </div>
    )
}