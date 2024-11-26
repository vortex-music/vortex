import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'

function App() {
  return (
    <div className='w-full h-full flex flex-col'>
      <AppTitleBar />
      <hr />
      <Drawer>Sidebar!</Drawer>
    </div>
  )
}

export default App
