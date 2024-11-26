import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'
import TextField from './components/base/TextField'

function App() {
  return (
    <div className='w-full h-full flex flex-col bg-app_background'>
      <AppTitleBar />
      <hr className='border border-primary_border'/>
      <Drawer>
        <TextField />
      </Drawer>
    </div>
  )
}

export default App
