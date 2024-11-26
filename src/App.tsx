import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'
import TextField from './components/base/TextField'
import { Button } from '@headlessui/react'

function App() {
  return (
    <div className='w-full h-full flex flex-col bg-app_background'>
      <AppTitleBar /><hr/>
      <Drawer>
        <TextField />
        <Button>Hello</Button>
      </Drawer>
    </div>
  )
}

export default App
