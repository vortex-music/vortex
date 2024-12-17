import { ArrowUpOnSquareIcon, ArrowsRightLeftIcon, BackwardIcon, ChatBubbleBottomCenterTextIcon, NumberedListIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid"
import IconButton from "../components/base/IconButton"
import React from "react";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import Slider from "../components/base/Slider";
import AlbumDefault from '../assets/album-default.png';
import Typography from "../components/base/Typography";

export default () => {
    /* Use Redux! */
    const [isPlaying, _setIsPlaying] = React.useState(false);

    return (
        <div className="h-full w-full flex items-center bg-bg-primary">
            {/* Left Side Controls */}
            <div className="flex items-center gap-x-1 bg-bg-primary">
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
            <div className="rounded h-4/5 pl-1 pr-1 border min-w-96 w-2/5 flex items-center bg-bg-secondary">
                <img className="rounded h-5/6" src={AlbumDefault} />
                <div className="w-full flex flex-col items-center justify-center text-text-secondary transition-colors hover:text-primary-dark">
                    <Typography className="text-sm font-semibold">Kaavaalaa (Jailer)</Typography>
                    <Typography className="text-sm text-inherit">Anirudh Ravichander, Arunraja Kamaraj, and Shilpa Rao</Typography>
                </div>
            </div>

            {/* Right Draggable Area */}
            <div className="wa-drag grow h-full" />

            {/* Right Side Controls */}
            <div className="flex items-center gap-x-1 text-text-primary">
                <SpeakerWaveIcon className="size-4 mr-1" />
                <Slider min="0" max="100" className="w-20" />
                <IconButton className="ml-4"><ArrowUpOnSquareIcon className="size-5" /></IconButton>
                <IconButton><ChatBubbleBottomCenterTextIcon className="size-5" /></IconButton>
                <IconButton><NumberedListIcon className="size-5" /></IconButton>
            </div>
        </div>
    )
}