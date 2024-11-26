import AppTitleBar from './sections/AppTitleBar'
import Button from './components/base/Button'
import IconButton from './components/base/IconButton'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

function App() {
  return (
    <div className='w-full h-full'>
      <AppTitleBar />
      <hr />
      <IconButton><XMarkIcon className='size-5' /></IconButton>
    </div>
  )
}

export default App
