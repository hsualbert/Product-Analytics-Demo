import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { NavigationBar } from './components/navigationBar/navigationBar'
import { ProductAnalytics } from './features/productAnalytics/productAnalytics'

function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <ProductAnalytics></ProductAnalytics>
        </div>
    )
}

export default App
