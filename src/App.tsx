import AppTitleBar from './sections/AppTitleBar'
import Drawer from './components/base/Drawer'
import TextField from './components/base/TextField'

function App() {
  return (
<<<<<<< HEAD
    <div className='w-full h-full flex flex-col'>
      <AppTitleBar /><hr />
      <Drawer>
        <TextField />
      </Drawer>
=======
    <div className='w-full h-full flex flex-col bg-app_background'>
      <AppTitleBar />
      <hr className='border border-primary_border'/>
      <Drawer>Sidebar!</Drawer>
>>>>>>> 63be5258b12abed3cc80122b77aaf25674f044cc
    </div>
  )
}

export default App
