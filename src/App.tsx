import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'
import TextField from './components/base/TextField'
import { Button } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

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

        <Button>Hello</Button>
      </Drawer>
    </div>
  )
}

export default App
