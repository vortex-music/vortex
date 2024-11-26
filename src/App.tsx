import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'
import TextField from './components/base/TextField'

function App() {
  return (
    <div className='w-full h-full flex flex-col'>
      <AppTitleBar /><hr />
      <Drawer>
        <TextField />
      </Drawer>
    </div>
  )
}

export default App
