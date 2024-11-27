import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'
import TextField from './components/base/TextField'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Typography from './components/base/Typography'

function App() {
  return (
    <div className='w-full h-full flex flex-col bg-app_background'>
      <AppTitleBar /><hr/>
      <Drawer>
        <TextField 
          placeholder='Search'
          startAdornment={<MagnifyingGlassIcon />} 
          className='w-full' 
        />

        <Typography className='mt-5'>Playlists and Other Content goes Here!</Typography>
      </Drawer>
    </div>
  )
}

export default App
