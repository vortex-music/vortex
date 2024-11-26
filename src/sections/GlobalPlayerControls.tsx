import { ArrowUpOnSquareIcon, ArrowsRightLeftIcon, BackwardIcon, ChatBubbleBottomCenterTextIcon, NumberedListIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid"
import IconButton from "../components/base/IconButton"
import React from "react";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import Slider from "../components/base/Slider";

export default () => {
    /* Use Redux! */
    const [isPlaying, _setIsPlaying] = React.useState(false);

    return (
        <div className="h-full w-full flex items-center bg-app_background">
            {/* Left Side Controls */}
            <div className="flex items-center gap-x-1 bg-app_background">
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

            {/* Left Draggable Area */}
            <div className="wa-drag grow h-full"></div>

            { /* Current Track Information */}
            <div className="text-primary_font">Current Playing Info</div>

            {/* Right Draggable Area */}
            <div className="wa-drag grow h-full" />

            {/* Right Side Controls */}
            <div className="flex items-center gap-x-1">
                <SpeakerWaveIcon className="size-5" />
                <Slider />
                <IconButton className="ml-4"><ArrowUpOnSquareIcon className="size-5" /></IconButton>
                <IconButton><ChatBubbleBottomCenterTextIcon className="size-5" /></IconButton>
                <IconButton><NumberedListIcon className="size-5" /></IconButton>
            </div>
        </div>
    )
}