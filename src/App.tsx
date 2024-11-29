import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'
import TextField from './components/base/TextField'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Typography from './components/base/Typography'
import React from 'react'
import Button from './components/base/Button'

function App() {
  const [pluginText, setPluginText] = React.useState("");

  /* Test Base Plugin */
  const loadUserPlugin = async () => {
    const rootPluginPath = `${await window.vortexAPI.getAppPath()}/plugins`;
    const plugin: any = (await import(/* @vite-ignore */ `${rootPluginPath}/${pluginText}`)).default;
    console.log("Plugin Imported!")
    
    /* Initialize Plugin */
    plugin.initialize();
    plugin.play();
  }

  return (
    <div className='w-full h-full flex flex-col bg-app_background'>
      <AppTitleBar /><hr />
      <div className='flex w-full h-full'>
        {/* Side Bar */}
        <Drawer>
          <TextField
            placeholder='Search'
            startAdornment={<MagnifyingGlassIcon />}
            className='w-full'
          />

          <Typography className='mt-5'>Playlists and Other Content goes Here!</Typography>
        </Drawer>

        {/* Main Content */}
        <div className='p-2'>
          <Typography>Dynamic Plugin Import:</Typography>
          <TextField value={pluginText} onChange={(e) => { setPluginText(e.target.value) }} placeholder='Enter Plugin Name' />
          <Button onClick={loadUserPlugin} className='mt-2'>Load Plugin</Button>
        </div>
      </div>
    </div>
  )
}

export default App
