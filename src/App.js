import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { fiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import './app.css'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'></div>
            <div className='fixed right-4 bottom-4' style={{zIndex: '1000'} }></div>
        </BrowserRouter>
    </div>
  )
}

export default App