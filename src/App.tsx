import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'

function App() {
  return (
    <div className='w-full h-full flex flex-col bg-app_background'>
      <AppTitleBar />
      <hr className='border border-primary_border'/>
      <Drawer>Sidebar!</Drawer>
    </div>
  )
}

export default App
