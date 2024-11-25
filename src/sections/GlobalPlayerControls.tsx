import { FastRewindRounded } from "@mui/icons-material"
import ShuffleRounded from "@mui/icons-material/ShuffleRounded"
import { Avatar, Box, IconButton, Paper, Slider, SxProps } from "@mui/material"
import ToggleIconButton from "../components/ToggleIconButton"
import React from "react"
import PauseRounded from "@mui/icons-material/PauseRounded"
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded"
import FastForwardRounded from "@mui/icons-material/FastForwardRounded"
import RepeatRounded from "@mui/icons-material/RepeatRounded"
import VolumeUp from "@mui/icons-material/VolumeUp"
import AirplayRounded from "@mui/icons-material/AirplayRounded"
import LyricsRounded from "@mui/icons-material/LyricsRounded"
import FormatListNumberedRounded from "@mui/icons-material/FormatListNumberedRounded"
import DefaultAlbumCover from '../assets/DefaultAlbumCover.png'

export default (props: { sx?: SxProps }) => {
    const [playing, _setPlaying] = React.useState(true);
    const [volumeLevel, setVolumeLevel] = React.useState(30);

    return (
        <Box sx={{
            ...props.sx,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
        }}>
            { /* Play & Pause Controls */}
            <Box sx={{
                display: 'flex',
                gap: '2px',
                height: '100%',
                alignItems: 'center'
            }}>
                <ToggleIconButton value="check" selected><ShuffleRounded /></ToggleIconButton>
                <IconButton><FastRewindRounded /></IconButton>
                <IconButton>{(playing) ? <PauseRounded /> : <PlayArrowRounded />}</IconButton>
                <IconButton><FastForwardRounded /></IconButton>
                <ToggleIconButton value="check1"><RepeatRounded /></ToggleIconButton>
            </Box>

            { /* Currently Playing Panel */}
            <Paper sx={{
                boxShadow: 0,
                flexGrow: 1,
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                maxWidth: '500px',
                height: '80%',
                padding: '3px',
                borderRadius: '8px',
                background: 'rgba(80, 80, 80, 0.5)',
                backdropFilter: 'blur(10px)'
            }}>
                <img 
                    src={DefaultAlbumCover} 
                    style={{
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '6px'
                    }}
                />
            </Paper>

            { /* Other Controls */}
            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                gap: '2px',
                height: '100%',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VolumeUp sx={{ fontSize: '1.2rem' }} />
                    <Slider
                        size="small"
                        sx={{
                            '&': { "app-region": "no-drag" },
                            color: (theme) => (theme.palette.text.primary),
                            minWidth: '75px',
                            marginLeft: '15px',
                            marginRight: '10px'
                        }}
                    />
                </Box>

                <IconButton><AirplayRounded /></IconButton>
                <IconButton><LyricsRounded /></IconButton>
                <IconButton><FormatListNumberedRounded /></IconButton>
            </Box>
        </Box>
    )
}